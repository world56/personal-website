import {
  TooltipContent,
  TooltipTrigger,
  Tooltip as Layout,
} from "@/components/ui/tooltip";

interface TypeTooltipProps {
  type?: "button";
  onClick?(): void;
  className?: string;
  disabled?: boolean;
  /**
   * @param maxWidth 更好的兼容 Safari
   */
  maxWidth?: number | string;
  children?: React.ReactNode;
  title?: string | React.ReactNode;
}

const Tooltip: React.FC<TypeTooltipProps> = ({
  type,
  title,
  onClick,
  disabled,
  children,
  className = "",
  maxWidth = "28rem",
}) => {
  function getButtonClass() {
    if (type === "button") {
      if (disabled) {
        return "font-medium text-black/45 underline-offset-4 cursor-default";
      } else {
        return "font-medium hover:underline underline-offset-4 cursor-pointer";
      }
    }
    return "cursor-default ";
  }

  return (
    <Layout>
      <TooltipTrigger
        style={{ maxWidth }}
        onClick={disabled ? undefined : onClick}
        className={`${getButtonClass()} truncate ${className}`}
      >
        {children}
      </TooltipTrigger>
      {title ? (
        <TooltipContent
          style={{ maxWidth }}
          className="overflow-hidden whitespace-normal text-wrap wrap-break-word"
        >
          {title}
        </TooltipContent>
      ) : null}
    </Layout>
  );
};

export default Tooltip;
