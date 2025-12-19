type PagePlaceholderProps = {
  title: string;
  description?: string;
};

export default function PagePlaceholder({
  title,
  description,
}: PagePlaceholderProps) {
  return (
    <div className="p-6 text-white card">
      <h1 className="text-2xl font-semibold">{title}</h1>
      {description ? (
        <p className="text-sm text-white/70">{description || ""}</p>
      ) : null}
    </div>
  );
}
