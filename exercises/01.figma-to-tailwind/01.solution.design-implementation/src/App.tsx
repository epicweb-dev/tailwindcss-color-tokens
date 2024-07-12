export default function ColorDesignTokens() {
	return (
		<div className="py-6 sm:py-12">
			<div className="mx-auto max-w-4xl p-6 sm:p-8">
				<div className="rounded border border-black p-6 sm:p-8">
					<p className="text-xs font-semibold uppercase tracking-widest">
						Special Deal
					</p>
					<h2 className="mt-1 text-2xl font-semibold sm:text-3xl">
						Opportunity of a lifetime
					</h2>
					<p className="mt-4">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates
						sint dicta quas explicabo rem quisquam consectetur aperiam facere
						temporibus aut. Voluptatibus minus nesciunt qui voluptas fugiat
						voluptate repudiandae error asperiores.
					</p>

					<a
						href="#"
						className="mt-6 inline-block rounded bg-black px-4 py-2 text-sm font-medium text-white"
					>
						Learn more
					</a>
				</div>
				<div className="mt-6 grid gap-6 sm:mt-8 sm:grid-cols-2 sm:gap-8">
					<div className="grid place-items-center rounded bg-gray-100 px-8 py-12">
						<span className="text-sm font-medium uppercase tracking-widest text-black/60">
							Conversion rate
						</span>
						<span className="text-4xl font-black text-black sm:text-6xl">
							9.86%
						</span>
					</div>
					<div className="grid place-items-center rounded bg-gray-100 px-8 py-12">
						<span className="text-sm font-medium uppercase tracking-widest text-black/60">
							customers
						</span>
						<span className="text-4xl font-black text-black sm:text-6xl">
							1M+
						</span>
					</div>
				</div>
			</div>
		</div>
	)
}
