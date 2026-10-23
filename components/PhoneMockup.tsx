import { Icon } from "./Icon";

// Mockup ilustrativo da tela de batida no app.
export function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[270px] sm:w-[290px]" role="img"
      aria-label="Tela do app Ponto Flow mostrando uma batida de entrada confirmada com foto e localização">
      <div className="absolute -inset-10 rounded-full bg-violet-600/30 blur-3xl" aria-hidden="true" />
      <div className="relative rounded-[2.6rem] border border-white/15 bg-[#0d0b1a] p-3 shadow-2xl shadow-violet-900/50">
        <div className="mx-auto mb-3 h-5 w-24 rounded-full bg-black" />
        <div className="rounded-[2rem] bg-gradient-to-b from-[#1a1433] to-[#0f0c1f] px-5 pb-6 pt-5 text-white">
          <div className="flex items-center justify-between text-xs text-violet-200/80">
            <span>Loja Centro</span><span>08:02</span>
          </div>
          <p className="mt-4 text-sm text-violet-200/80">Bom dia, Ana</p>
          <p className="text-2xl font-semibold">Entrada registrada</p>
          <div className="mt-5 grid place-items-center">
            <div className="relative grid h-36 w-36 place-items-center rounded-3xl border border-violet-400/40 bg-violet-500/10">
              <Icon name="qr" className="h-20 w-20 text-violet-300" />
              <span className="absolute inset-x-4 top-1/2 h-0.5 animate-pulse bg-violet-400 shadow-[0_0_12px_#a78bfa]" />
            </div>
          </div>
          <ul className="mt-5 space-y-2 text-sm">
            {[["camera", "Foto de verificação"], ["pin", "Localização confirmada"], ["clock", "08:02:14"]].map(([i, t]) => (
              <li key={t} className="flex items-center gap-3 rounded-xl bg-white/5 px-3 py-2">
                <Icon name={i} className="h-4 w-4 text-violet-300" />
                <span className="flex-1">{t}</span>
                <Icon name="tick" className="h-4 w-4 text-emerald-400" />
              </li>
            ))}
          </ul>
          <div className="mt-5 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-500 py-3 text-center text-sm font-semibold">
            Concluído
          </div>
        </div>
      </div>
      <div className="absolute -right-6 bottom-16 hidden w-48 rounded-2xl border border-white/10 bg-white/95 p-3 text-xs text-slate-800 shadow-xl sm:block">
        <p className="flex items-center gap-1 font-semibold text-sky-600"><Icon name="telegram" className="h-4 w-4" /> Resumo do dia</p>
        <p className="mt-1">12 de 12 presentes · 1 atraso · 0 faltas</p>
      </div>
    </div>
  );
}
