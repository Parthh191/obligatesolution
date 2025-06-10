import Image from 'next/image';

const testimonials = [
	{
		content:
			'The 1-on-1 mentorship completely transformed my learning journey. I went from struggling with basic concepts to building full-stack applications in months.',
		author: 'Sarah Chen',
		role: 'Full Stack Developer at Microsoft',
		image:
			'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200',
		company: '/icons/companies/microsoft.svg',
		country: '🇺🇸',
	},
	{
		content:
			'Having a dedicated mentor helped me transition into tech from a non-CS background. The personalized guidance and real project experience were invaluable.',
		author: 'Michael Patel',
		role: 'Frontend Engineer at Google',
		image:
			'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200',
		company: 'https://www.svgrepo.com/show/448227/google.svg',
		country: '🇬🇧',
	},
];

export function Testimonials() {
	return (
		<section className="py-32 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 relative overflow-hidden">
			{/* Animated background pattern */}
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f1a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1a_1px,transparent_1px)] bg-[size:24px_24px]">
					<div className="absolute inset-0 bg-gradient-to-r from-gray-950/50 to-transparent" />
				</div>
			</div>

			{/* Decorative blurred gradients */}
			<div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob" />
			<div className="absolute top-0 -right-4 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000" />
			<div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000" />

			<div className="container relative mx-auto px-4 lg:px-8">
				<div className="text-center max-w-2xl mx-auto">
					<div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 mb-8 backdrop-blur-sm">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="w-8 h-8 text-indigo-400"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={1.5}
								d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z"
							/>
						</svg>
					</div>
					<h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
						Student Success Stories
					</h2>
					<p className="mt-4 text-lg text-gray-400">
						Hear from our graduates who transformed their careers
					</p>
				</div>

				<div className="mt-20 grid gap-8 lg:grid-cols-2">
					{testimonials.map((testimonial, index) => (
						<div key={testimonial.author} className="relative group">
							{/* Card glow effect */}
							<div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500" />

							<div className="relative flex flex-col rounded-2xl bg-gray-800/40 backdrop-blur-sm p-8 h-full border border-gray-700/50 hover:border-indigo-500/50 transition-all duration-300">
								{/* Quote icon with gradient */}
								<div className="absolute top-8 right-8">
									<div className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
										<svg
											width="32"
											height="32"
											viewBox="0 0 32 32"
											fill="currentColor"
										>
											<path d="M10.4 13.6c2.4-.8 4.4-2 6-3.6 1.6-1.6 2.4-3.2 2.4-4.8 0-.8-.2-1.4-.6-1.8-.4-.4-1-.6-1.8-.6-2 0-3.6 1-4.8 3-.8 1.6-1.2 3.4-1.2 5.4v13.2c0 2 .4 3.6 1.2 4.8.8 1.2 2 1.8 3.6 1.8s2.8-.6 3.6-1.8c.8-1.2 1.2-2.8 1.2-4.8V22h-9.6v-8.4zm16 0c2.4-.8 4.4-2 6-3.6 1.6-1.6 2.4-3.2 2.4-4.8 0-.8-.2-1.4-.6-1.8-.4-.4-1-.6-1.8-.6-2 0-3.6 1-4.8 3-.8 1.6-1.2 3.4-1.2 5.4v13.2c0 2 .4 3.6 1.2 4.8.8 1.2 2 1.8 3.6 1.8s2.8-.6 3.6-1.8c.8-1.2 1.2-2.8 1.2-4.8V22h-9.6v-8.4z" />
										</svg>
									</div>
								</div>

								<div className="flex-1">
									<blockquote className="text-lg font-medium text-gray-100 leading-relaxed">
										"{testimonial.content}"
									</blockquote>
								</div>

								<div className="mt-8 pt-8 border-t border-gray-700/30">
									<div className="flex items-center gap-4">
										<div className="relative">
											{/* Profile image glow */}
											<div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur opacity-75" />
											<div className="relative rounded-full p-1 bg-gradient-to-r from-indigo-500 to-purple-500">
												<Image
													src={testimonial.image}
													alt={testimonial.author}
													width={56}
													height={56}
													className="rounded-full object-cover"
												/>
											</div>
										</div>
										<div className="flex-1">
											<div className="font-semibold text-white flex items-center gap-2">
												{testimonial.author}
												<span className="text-xl">
													{testimonial.country}
												</span>
											</div>
											<div className="flex items-center gap-2 mt-1">
												<div className="text-sm text-gray-400">
													{testimonial.role}
												</div>
												<Image
													src={testimonial.company}
													alt="Company logo"
													width={16}
													height={16}
													className="opacity-75"
												/>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Company logos section with enhanced styling */}
				<div className="mt-24 pt-12 border-t border-gray-800/50">
					<p className="text-center text-sm font-medium text-gray-400 mb-12">
						Our graduates work at world-class companies
					</p>
					<div className="flex justify-center items-center gap-12 flex-wrap">
						{[
							{ src: '/icons/companies/google.svg', name: 'Google', width: 120, height: 40 },
							{ src: '/icons/companies/microsoft.svg', name: 'Microsoft', width: 95, height: 40 },
							{ src: '/icons/companies/meta.svg', name: 'Meta', width: 95, height: 40 },
							{ src: '/icons/companies/netflix.svg', name: 'Netflix', width: 120, height: 40 }
						].map((company, i) => (
							<div key={i} className="relative group">
								<div className="absolute -inset-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
								<Image
									src={company.src}
									alt={`${company.name} logo`}
									width={company.width}
									height={company.height}
									className="h-8 w-auto relative opacity-75 hover:opacity-100 transition-all duration-300"
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}