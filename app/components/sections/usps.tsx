import Image from 'next/image';

const features = [
	{
		title: '1-on-1 Live Sessions',
		description: 'Direct interaction with expert mentors for personalized learning',
		icon: '/icons/video-camera.svg',
		illustration: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&q=80&w=800&h=600',
		gradient: 'from-blue-500/30 to-indigo-500/30',
	},
	{
		title: 'AI-Powered Support',
		description: '24/7 access to AI tools for instant doubt resolution',
		icon: '/icons/robot.svg',
		illustration: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800&h=600',
		gradient: 'from-indigo-500/30 to-purple-500/30',
	},
	{
		title: 'Personalized Path',
		description: 'Custom learning roadmap based on your goals and skill level',
		icon: '/icons/route.svg',
		illustration: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&q=80&w=800&h=600',
		gradient: 'from-purple-500/30 to-pink-500/30',
	},
	{
		title: 'Real Projects',
		description: 'Work on industry-standard projects with code reviews',
		icon: '/file.svg',
		illustration: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800&h=600',
		gradient: 'from-pink-500/30 to-rose-500/30',
	},
	{
		title: 'Career Support',
		description: 'Interview preparation and job placement assistance',
		icon: '/icons/career.svg',
		illustration: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=800&h=600',
		gradient: 'from-rose-500/30 to-orange-500/30',
	},
	{
		title: 'Learn at Your Pace',
		description: 'Flexible scheduling and self-paced learning modules',
		icon: '/icons/clock.svg',
		illustration: 'https://images.unsplash.com/photo-1506784365847-bbad939e9335?auto=format&fit=crop&q=80&w=800&h=600',
		gradient: 'from-orange-500/30 to-yellow-500/30',
	},
];

export function USPs() {
	return (
		<section className="py-24 bg-gray-950 relative overflow-hidden">
			{/* Enhanced background effects */}
			<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-pink-500/10 animate-gradient-slow" />
			<div className="absolute inset-0 opacity-25">
				<div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px] animate-grid-slow" />
			</div>

			<div className="container relative mx-auto px-4 lg:px-8">
				<div className="text-center max-w-2xl mx-auto">
					<div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-indigo-500/30 to-purple-500/30 mb-8 ring-1 ring-white/20 shadow-lg hover:shadow-indigo-500/20 transition-all duration-300 animate-float">
						<Image
							src="/globe.svg"
							width={40}
							height={40}
							alt=""
							className="text-white [&>path]:stroke-current [&>path]:stroke-[2] drop-shadow-[0_0_3px_rgba(99,102,241,0.5)] animate-spin-slow"
						/>
					</div>
					<h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent animate-gradient-x">
						Why Choose Us
					</h2>
					<p className="mt-4 text-lg text-gray-300 animate-fade-in">
						Experience the difference with our unique approach to coding education
					</p>
				</div>

				<div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
					{features.map((feature, index) => (
						<div
							key={feature.title}
							className="relative group rounded-2xl transition-all duration-500 p-1 backdrop-blur-sm hover:scale-[1.02] animate-fade-in"
							style={{
								animationDelay: `${index * 150}ms`
							}}
						>
							{/* Outer glow effect */}
							<div className="absolute -inset-2 bg-gradient-to-r from-indigo-500/0 via-purple-500/10 to-pink-500/0 rounded-2xl blur-2xl group-hover:via-purple-500/30 transition-all duration-500" />
							
							{/* Card border gradient */}
							<div className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-r ${feature.gradient} opacity-30 group-hover:opacity-60 transition-all duration-500 animate-gradient-slow`} />
							
							{/* Card background */}
							<div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gray-900/90 to-gray-800/90 transition-all duration-500 group-hover:from-gray-900/95 group-hover:to-gray-800/95" />
							
							<div className="relative p-6 rounded-xl h-full">
								<div className="flex items-center gap-4 mb-6">
									<div className="flex-shrink-0 rounded-xl p-3 bg-gradient-to-br from-indigo-500/30 to-purple-500/30 group-hover:from-indigo-500/50 group-hover:to-purple-500/50 transition-all duration-300 ring-1 ring-white/20 shadow-lg group-hover:shadow-indigo-500/30">
										<div className="w-6 h-6 relative transform group-hover:scale-110 transition-transform duration-300">
											<Image
												src={feature.icon}
												alt={feature.title}
												fill
												className="text-white [&>*]:stroke-current [&>*]:stroke-[2.5] group-hover:text-indigo-200 transition-colors drop-shadow-[0_0_3px_rgba(99,102,241,0.5)]"
											/>
										</div>
									</div>
									<h3 className="text-lg font-semibold bg-gradient-to-r from-white to-gray-300 group-hover:from-indigo-200 group-hover:to-purple-200 bg-clip-text text-transparent transition-all duration-300">
										{feature.title}
									</h3>
								</div>

								<div className="relative w-full h-48 mb-6 rounded-xl overflow-hidden ring-1 ring-white/10 group-hover:ring-white/20 transition-all duration-500 transform group-hover:translate-y-[-2px]">
									<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 group-hover:opacity-0 transition-opacity duration-500" />
									<Image
										src={feature.illustration}
										alt=""
										fill
										className="object-cover object-center transform transition-all duration-700 scale-105 group-hover:scale-110"
										sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
										priority={true}
									/>
								</div>

								<p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
									{feature.description}
								</p>
							</div>
						</div>
					))}
				</div>

				{/* Stats section with enhanced styling */}
				<div className="mt-20 pt-12 border-t border-gray-800/50">
					<div className="grid gap-8 md:grid-cols-3 items-center text-center">
						{[
							{
								icon: '/icons/users.svg',
								value: '500+',
								label: 'Active Students',
								gradient: 'from-indigo-500/30 to-purple-500/30',
								hoverColor: 'indigo-200',
								shadowColor: 'rgba(99,102,241,0.5)'
							},
							{
								icon: '/icons/chart.svg',
								value: '95%',
								label: 'Job Placement Rate',
								gradient: 'from-purple-500/30 to-pink-500/30',
								hoverColor: 'purple-200',
								shadowColor: 'rgba(168,85,247,0.5)'
							},
							{
								icon: '/icons/mentor.svg',
								value: '300+',
								label: 'Expert Mentors',
								gradient: 'from-pink-500/30 to-rose-500/30',
								hoverColor: 'pink-200',
								shadowColor: 'rgba(236,72,153,0.5)'
							}
						].map((stat, index) => (
							<div
								key={stat.label}
								className="relative group p-8 rounded-2xl transition-all duration-500 backdrop-blur-sm hover:scale-[1.02] animate-fade-in"
								style={{
									animationDelay: `${(index + 6) * 150}ms`
								}}
							>
								{/* Outer glow effect */}
								<div className="absolute -inset-2 bg-gradient-to-r from-indigo-500/0 via-purple-500/10 to-pink-500/0 rounded-2xl blur-2xl group-hover:via-purple-500/30 transition-all duration-500" />
								
								{/* Card border gradient */}
								<div className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-r ${stat.gradient} opacity-30 group-hover:opacity-60 transition-all duration-500 animate-gradient-slow`} />
								
								{/* Card background */}
								<div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gray-900/90 to-gray-800/90 transition-opacity group-hover:opacity-95" />
								
								<div className="relative">
									<div className="w-12 h-12 mx-auto mb-4 relative transform group-hover:scale-110 transition-transform duration-300">
										<Image
											src={stat.icon}
											fill
											alt=""
											className={`text-white [&>*]:stroke-current [&>*]:stroke-[2.5] group-hover:text-${stat.hoverColor} transition-colors drop-shadow-[0_0_3px_${stat.shadowColor}]`}
										/>
									</div>
									<div className={`text-4xl font-bold bg-gradient-to-r from-white to-${stat.hoverColor} bg-clip-text text-transparent transition-colors duration-300`}>
										{stat.value}
									</div>
									<p className="mt-2 text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
										{stat.label}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}