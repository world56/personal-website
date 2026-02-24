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
    className={`md:p-7.5 md:pt-22.5 md:m-0 m-3 p-4 bg-card shadow-custom md:min-h-180 rounded-3xl mb-6 ${className}`}
  >
    {children}
  </section>
);

export default Container;
