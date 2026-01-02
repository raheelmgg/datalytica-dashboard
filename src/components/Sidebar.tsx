import { useEffect, useState } from "react";
import { ChevronDown, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navItems, type NavItem } from "@/navigation/navItems";

type SidebarProps = { activePath: string };

/* ----------------------------------
   Nav List
----------------------------------- */

function NavList({
  items,
  activePath,
  open,
  toggle,
  onNavigate,
}: {
  items: NavItem[];
  activePath: string;
  open: Record<string, boolean>;
  toggle: (key: string) => void;
  onNavigate?: () => void;
}) {
  return (
    <ul className="space-y-2">
      {items.map((item) => {
        const isActive =
          item.href === activePath ||
          item.children?.some((c) => c.href === activePath);

        const hasChildren = !!item.children?.length;
        const hasHref = !!item.href;
        const isOpen = open[item.title] ?? false;

        const rowClasses = cn(
          "flex w-full items-center justify-between px-2 py-1 rounded hover:text-primary",
          isActive && "text-primary font-semibold"
        );

        return (
          <li key={item.title}>
            {hasChildren ? (
              // All items with children use the same layout: text + separate chevron
              <div className={rowClasses}>
                {hasHref ? (
                  // Parent with href - text is clickable link
                  <Link
                    to={item.href ?? "#"}
                    onClick={onNavigate}
                    className="flex-1 cursor-pointer"
                  >
                    <span>{item.title}</span>
                  </Link>
                ) : (
                  // Parent without href - text is button that toggles
                  <button
                    type="button"
                    onClick={() => toggle(item.title)}
                    className="flex-1 text-left"
                    aria-expanded={isOpen}
                  >
                    <span>{item.title}</span>
                  </button>
                )}
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    toggle(item.title);
                  }}
                  className="ml-2 p-1 hover:bg-white/10 rounded"
                  aria-expanded={isOpen}
                  aria-label={`Toggle ${item.title} submenu`}
                >
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 transition-transform",
                      isOpen && "rotate-180"
                    )}
                  />
                </button>
              </div>
            ) : (
              // No children - simple link
              <Link
                to={item.href ?? "#"}
                className={cn(rowClasses, "cursor-pointer")}
                onClick={onNavigate}
              >
                <span>{item.title}</span>
              </Link>
            )}

            {hasChildren && (
              <ul
                className={cn(
                  "pl-4 space-y-1 overflow-hidden transition-all duration-200 ease-in-out",
                  isOpen ? "max-h-64 opacity-100 mt-1" : "max-h-0 opacity-0"
                )}
              >
                {item.children!.map((child) => {
                  const childActive = child.href === activePath;
                  return (
                    <li key={child.title}>
                      <Link
                        to={child.href ?? "#"}
                        onClick={onNavigate}
                        className={cn(
                          "block py-1 text-sm hover:text-primary cursor-pointer",
                          childActive &&
                            "text-primary underline underline-offset-4"
                        )}
                      >
                        {child.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </li>
        );
      })}
    </ul>
  );
}

/* ----------------------------------
   Sidebar
----------------------------------- */

export default function Sidebar({ activePath }: SidebarProps) {
  const [open, setOpen] = useState<Record<string, boolean>>({});
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggle = (key: string) => {
    setOpen((prev) => {
      const isCurrentlyOpen = prev[key];
      return isCurrentlyOpen ? {} : { [key]: true };
    });
  };

  useEffect(() => {
    // Check if activePath matches a child route
    const parentByChild = navItems.find((item) =>
      item.children?.some((child) => child.href === activePath)
    );

    // Check if activePath matches a parent route (Marketing is special - has clickable parent)
    const parentByHref = navItems.find(
      (item) => item.href === activePath && item.children?.length
    );

    const parent = parentByChild || parentByHref;

    if (parent) {
      setOpen({ [parent.title]: true });
    }
  }, [activePath]);

  const content = (
    <nav className="w-64 text-white px-1 py-4 overflow-y-auto">
      <NavList
        items={navItems}
        activePath={activePath}
        open={open}
        toggle={toggle}
        onNavigate={() => setMobileOpen(false)} // 👈 auto-close mobile
      />
    </nav>
  );

  return (
    <>
      {/* Mobile Sidebar */}
      <div className="md:hidden p-2">
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild>
            <button type="button" aria-label="Open sidebar">
              <Menu className="h-6 w-6 text-white" />
            </button>
          </SheetTrigger>

          <SheetContent
            side="left"
            className="p-0 bg-[#2E2C38] [&>button]:text-white border-r-0"
          >
            {content}
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Sidebar */}
      <aside className="hidden md:block max-w-64">{content}</aside>
    </>
  );
}
