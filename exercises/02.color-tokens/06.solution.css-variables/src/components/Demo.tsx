export function Demo(props: React.ComponentProps<'div'>) {
	return (
		<div {...props}>
			<div className="bg-subtle min-h-screen py-6 sm:py-12">
				<div className="mx-auto max-w-4xl p-6 sm:p-8">
					<div className="border-muted bg-neutral rounded border p-6 sm:p-8">
						<p className="text-muted text-xs font-semibold uppercase tracking-widest">
							Special Deal
						</p>
						<h2 className="text-copy mt-1 text-2xl font-semibold sm:text-3xl">
							Opportunity of a lifetime
						</h2>
						<p className="text-subtle mt-4">
							Lorem ipsum dolor sit, amet consectetur adipisicing elit.
							Voluptates sint dicta quas explicabo rem quisquam consectetur
							aperiam facere temporibus aut. Voluptatibus minus nesciunt qui
							voluptas fugiat voluptate repudiandae error asperiores.
						</p>

						<a
							href="#"
							className="bg-bold text-inverted hover:bg-neutral-inverted mt-6 rounded px-4 py-2 text-sm font-medium"
						>
							Learn more
						</a>
					</div>
					<div className="mt-6 grid gap-6 sm:mt-8 sm:grid-cols-2 sm:gap-8">
						<div className="bg-highlight grid place-items-center rounded px-8 py-12">
							<span className="text-copy/60 text-sm font-medium uppercase tracking-widest">
								Conversion rate
							</span>
							<span className="text-copy text-4xl font-black sm:text-6xl">
								9.86%
							</span>
						</div>
						<div className="bg-accent grid place-items-center rounded px-8 py-12">
							<span className="text-inverted/60 text-sm font-medium uppercase tracking-widest">
								customers
							</span>
							<span className="text-inverted text-4xl font-black sm:text-6xl">
								1M+
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
