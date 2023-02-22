interface IMintProps {
  children: React.ReactNode;
  className?: string;
}
export const MintOptionBody = ({ children }: IMintProps) => {
  return (
    <section className="flex items-center justify-between mb-4">
      {children}
    </section>
  );
};
