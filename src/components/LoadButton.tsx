import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { SearchOutlined, SyncOutlined } from "@ant-design/icons";

interface TypePropsButton extends Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "disabled" | "onClick"
> {
  loading?: boolean;
  onClick?(): void;
  icon?: typeof SearchOutlined;
  className?: string;
}

const LoadButton: React.FC<TypePropsButton> = ({
  loading,
  onClick,
  children,
  icon: Icon,
  className = "",
  type = "button",
  ...props
}) => {
  const t = useTranslations("common");
  return (
    <Button
      {...props}
      type={type}
      onClick={onClick}
      disabled={loading}
      className={`cursor-pointer ${className}`}
    >
      {loading ? (
        <SyncOutlined className="mr-2 h-4 w-4 animate-spin" spin />
      ) : Icon ? (
        <span className="mr-0.5 pt-0.5">
          <Icon />
        </span>
      ) : null}
      {children || t("refresh")}
    </Button>
  );
};

export default LoadButton;
