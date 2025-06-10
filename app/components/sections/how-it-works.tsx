import Image from 'next/image';

const steps = [
	{
		title: 'Book Trial',
		description: 'Schedule your free consultation with a mentor',
		icon: '/icons/clock.svg',
		illustration:
			'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
	},
	{
		title: 'Choose Mentor',
		description: 'Select from our expert pool of industry professionals',
		icon: '/icons/mentor.svg',
		illustration:
			'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80',
	},
	{
		title: 'Live Class',
		description: 'Attend personalized 1-on-1 coding sessions',
		icon: '/icons/video-camera.svg',
		illustration:
			'https://images.unsplash.com/photo-1601933973783-43cf8a7d4c5f?w=800&q=80',
	},
	{
		title: 'Doubt Support',
		description: '24/7 AI-powered assistance between sessions',
		icon: '/icons/robot.svg',
		illustration:
			'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80',
	},
	{
		title: 'Track Progress',
		description: 'Monitor your growth with detailed analytics',
		icon: '/icons/chart.svg',
		illustration:
			'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
	},
];

export function HowItWorks() {
	return (
		<section className="py-24 bg-gray-900 relative overflow-hidden">
			{/* Decorative elements */}
			<div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-transparent to-gray-950" />

			<div className="container relative mx-auto px-4 lg:px-8">
				<div className="text-center max-w-2xl mx-auto">
					<div className="inline-flex p-3 rounded-xl bg-indigo-500/10 mb-8">
						<Image
							src="/icons/route.svg"
							width={40}
							height={40}
							alt=""
							className="text-indigo-400"
						/>
					</div>
					<h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
						How It Works
					</h2>
					<p className="mt-4 text-lg text-gray-400">
						Your journey to becoming a proficient developer
					</p>
				</div>

				<div className="mt-16 relative">
					{/* Connection line for desktop */}
					<div className="hidden lg:block absolute top-[140px] left-0 w-full h-0.5">
						<div className="h-full bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
						<div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent blur-sm" />
					</div>

					<div className="grid gap-12 lg:gap-8 lg:grid-cols-5">
						{steps.map((step, index) => (
							<div
								key={step.title}
								className="relative flex flex-col items-center text-center group"
							>
								{/* Card with illustration */}
								<div className="relative w-full aspect-[4/3] mb-8">
									<div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-indigo-500/10 to-purple-500/10 group-hover:from-indigo-500/20 group-hover:to-purple-500/20 transition-colors" />
									<Image
										src={step.illustration}
										alt=""
										fill
										className="object-cover rounded-2xl"
									/>
									{/* Icon overlay */}
									<div className="absolute -bottom-6 left-1/2 -translate-x-1/2">
										<div className="relative">
											<div className="absolute inset-0 bg-indigo-500/20 rounded-full blur-xl transition-all duration-300 group-hover:bg-indigo-500/30 group-hover:blur-2xl" />
											<div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 border border-indigo-500/30 transition-transform duration-300 group-hover:scale-110 group-hover:border-indigo-500/50">
												<Image
													src={step.icon}
													width={24}
													height={24}
													alt=""
													className="w-6 h-6 text-indigo-400"
												/>
											</div>
										</div>
									</div>
								</div>

								<h3 className="text-lg font-semibold text-white mb-2">
									{step.title}
								</h3>
								<p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors max-w-[200px]">
									{step.description}
								</p>

								{/* Step number badge */}
								<div className="mt-4 flex items-center justify-center w-6 h-6 rounded-full bg-indigo-500/10 text-indigo-400 text-sm font-medium">
									{index + 1}
								</div>

								{/* Mobile connector line */}
								{index < steps.length - 1 && (
									<div className="lg:hidden absolute left-1/2 bottom-0 w-px h-8 bg-gradient-to-b from-indigo-500/50 to-transparent translate-y-full" />
								)}
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}