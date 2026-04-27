interface ShareButtonsProps {
  title: string;
  text: string;
}

export function ShareButtons({ title, text }: ShareButtonsProps) {
  async function handleShare() {
    const url = window.location.href;

    if (navigator.share) {
      await navigator.share({ title, text, url });
      return;
    }

    await navigator.clipboard.writeText(url);
  }

  return (
    <button
      type="button"
      onClick={handleShare}
      className="rounded-lg bg-ink px-5 py-3 font-semibold text-white"
    >
      공유하기
    </button>
  );
}
