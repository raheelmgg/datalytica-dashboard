import { useEffect, useState } from "react";
import { ChevronDown, ChevronUp, Menu } from "lucide-react";
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
        const isOpen = open[item.title] ?? false;

        const rowClasses = cn(
          "flex w-full items-center justify-between px-2 py-1 rounded hover:text-primary",
          isActive && "text-primary font-semibold"
        );

        return (
          <li key={item.title}>
            {hasChildren ? (
              <button
                type="button"
                className={rowClasses}
                onClick={() => toggle(item.title)}
                aria-expanded={isOpen}
              >
                <span>{item.title}</span>
                {isOpen ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </button>
            ) : (
              <Link
                to={item.href ?? "#"}
                className={rowClasses}
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
                          "block py-1 text-sm hover:text-primary",
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

  const toggle = (key: string) =>
    setOpen((prev) => ({ ...prev, [key]: !prev[key] }));

  // Auto-open parent section for active route
  useEffect(() => {
    const parent = navItems.find((item) =>
      item.children?.some((child) => child.href === activePath)
    );

    if (parent) {
      setOpen((prev) =>
        prev[parent.title] ? prev : { ...prev, [parent.title]: true }
      );
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
