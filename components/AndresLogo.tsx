import fs from "node:fs";
import path from "node:path";

// Usa public/logo-andres-tech.png se existir; senão mostra o nome em texto.
const hasLogo = fs.existsSync(path.join(process.cwd(), "public", "logo-andres-tech.png"));

export function AndresLogo({ className = "" }: { className?: string }) {
  if (hasLogo) {
    return <img src="/logo-andres-tech.png" alt="Andres Technologies" className={`w-auto ${className}`} />;
  }
  return (
    <span className={`inline-flex items-center font-semibold tracking-tight text-white ${className}`}>
      Andres<span className="ml-1 text-violet-400">Technologies</span>
    </span>
  );
}
