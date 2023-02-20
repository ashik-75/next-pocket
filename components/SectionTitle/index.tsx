function SectionTitle({ title, content }: { title: string; content: string }) {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center justify-center space-y-5 text-center">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-lg text-gray-700">{content}</p>
    </div>
  );
}

export default SectionTitle;
