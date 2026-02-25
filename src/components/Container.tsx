interface TypeContainerProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * @name Container 经典布局
 */
const Container: React.FC<TypeContainerProps> = ({
  children,
  className = "",
}) => (
  <section
    className={`md:p-7.5 p-4 md:pt-22.5 md:mx-0 mx-3 md:min-h-180 bg-card shadow-custom rounded-3xl mb-3 ${className}`}
  >
    {children}
  </section>
);

export default Container;
