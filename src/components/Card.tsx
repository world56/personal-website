import {
  CardTitle,
  CardHeader,
  CardContent,
  Card as Layout,
  CardDescription,
} from "@/components/ui/card";
import Tooltip from "./Tooltip";
import Loading from "./Loading";
import { useTranslations } from "next-intl";
import { RollbackOutlined } from "@ant-design/icons";

interface TypeCardProps {
  gap?: 4 | 8;
  title?: string;
  description?: string;
  className?: string;
  children?: React.ReactNode;
  onBack?(): void;
  loading?: boolean;
}

const STYLE_GAP = {
  4: "gap-4",
  8: "gap-8",
};

const Card: React.FC<TypeCardProps> = ({
  title,
  onBack,
  loading,
  gap = 8,
  children,
  description,
  className = "",
}) => {
  const t = useTranslations("common");

  function onBackClick(e: React.MouseEvent<HTMLSpanElement>) {
    e.preventDefault();
    onBack?.();
  }

  return (
    <Layout className={`shadow-custom ${className}`}>
      {title ? (
        <CardHeader>
          <CardTitle className="flex">
            {title}
            {onBack ? (
              <Tooltip title={t("back")} className="ml-auto">
                <RollbackOutlined
                  onClick={onBackClick}
                  className="cursor-pointer"
                />
              </Tooltip>
            ) : null}
          </CardTitle>
          {description ? (
            <CardDescription>{description}</CardDescription>
          ) : null}
        </CardHeader>
      ) : null}
      <CardContent>
        <Loading
          loading={loading}
          height="calc(100% - 10px)"
          className={`flex flex-col ${STYLE_GAP[gap]}`}
        >
          {children}
        </Loading>
      </CardContent>
    </Layout>
  );
};

export default Card;
