const items = [
  "Generative AI",
  "Large Language Models",
  "Trust & Safety",
  "Privacy",
  "Education",
  "Employment",
  "Human Behavior",
  "Communication",
  "Cornell Tech",
  "Powered by Cognition",
];

export default function Ticker() {
  const doubled = [...items, ...items];

  return (
    <div className="bg-acm-blue brutal-border-thick border-x-0 overflow-hidden py-3.5" aria-hidden="true">
      <div className="flex w-max animate-ticker">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="flex-shrink-0 font-mono text-sm font-bold uppercase tracking-[3px] text-white px-10 whitespace-nowrap after:content-['◆'] after:ml-10 after:opacity-50"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
