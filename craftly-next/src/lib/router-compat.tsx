"use client";

import NextLink from "next/link";
import {
  usePathname as useNextPathname,
  useParams as useNextParams,
  useRouter,
} from "next/navigation";

export function Link({
  to,
  children,
  className,
  ...props
}: {
  to: string;
  children: React.ReactNode;
  className?: string;
  [key: string]: unknown;
}) {
  return (
    <NextLink href={to} className={className} {...props}>
      {children}
    </NextLink>
  );
}

export function NavLink({
  to,
  children,
  className,
  ...props
}: {
  to: string;
  children:
    | React.ReactNode
    | ((props: { isActive: boolean }) => React.ReactNode);
  className?: string | ((props: { isActive: boolean }) => string);
  [key: string]: unknown;
}) {
  const pathname = useNextPathname() ?? "/";
  const isActive = pathname === to || pathname.startsWith(to + "/");

  const resolvedClassName =
    typeof className === "function" ? className({ isActive }) : className;

  const resolvedChildren =
    typeof children === "function" ? children({ isActive }) : children;

  return (
    <NextLink href={to} className={resolvedClassName} {...props}>
      {resolvedChildren}
    </NextLink>
  );
}

export function useParamsCompat<T extends Record<string, string>>(): T {
  const params = useNextParams<Record<string, string>>();
  return params as T;
}

export function useNavigate() {
  const router = useRouter();
  return (to: string | number, options?: { replace?: boolean }) => {
    if (typeof to === "number") {
      router.back();
    } else if (options?.replace) {
      router.replace(to);
    } else {
      router.push(to);
    }
  };
}

export function useLocation(): {
  pathname: string;
  search: string;
  hash: string;
  state: null;
  key: string;
} {
  const pathname = useNextPathname() ?? "/";
  return {
    pathname,
    search: "",
    hash: "",
    state: null,
    key: "default",
  };
}
