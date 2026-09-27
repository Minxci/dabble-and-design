export default function AnnouncementBar() {
  return (
    <div className="bg-navy px-4 py-2.5 text-center text-[11px] font-bold tracking-[0.2em] text-paper/90 uppercase">
      Made to order in Moline, IL
      <span className="mx-3 text-sun">✦</span>
      <span className="hidden sm:inline">Local pickup available<span className="mx-3 text-sun">✦</span></span>
      Bulk pricing for teams
    </div>
  );
}