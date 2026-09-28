import { Heart } from "./Doodles";

export default function AnnouncementBar() {
  return (
    <div className="bg-teal px-4 py-2 text-center text-[11px] font-extrabold tracking-[0.15em] text-white uppercase sm:text-xs">
      <span className="inline-flex items-center gap-2">
        <Heart className="size-3.5 fill-coral text-coral" />
        <span>
          Custom Apparel • Keychains • Gifts • Teams
          <span className="hidden sm:inline"> • Businesses • And More!</span>
        </span>
        <Heart className="size-3.5 fill-coral text-coral" />
      </span>
    </div>
  );
}