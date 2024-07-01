import clsx from 'clsx';

export function Button({ invert, href, className, children, ...props }) {
   className = clsx(
      className,
      'inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition',
      invert
         ? 'bg-white text-neutral-950 hover:bg-neutral-50'
         : 'bg-neutral-950 text-white hover:bg-neutral-950/70'
   );

   let inner = <span className="relative top-px">{children}</span>;

   return (
      <button className={className} {...props}>
         {inner}
      </button>
   );
}