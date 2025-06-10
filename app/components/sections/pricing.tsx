import { Button } from '../ui/button';
import Image from 'next/image';

const plans = [
	{
		name: '3 Months',
		price: 49,
		description: 'Perfect for beginners starting their coding journey',
		icon: 'https://www.svgrepo.com/show/530325/rocket.svg',
		features: [
			{
				text: '12 one-on-one sessions',
				icon: 'https://www.svgrepo.com/show/530412/video-camera.svg',
			},
			{
				text: 'Basic project reviews',
				icon: 'https://www.svgrepo.com/show/530319/sheet.svg',
			},
			{
				text: 'AI support during business hours',
				icon: 'https://www.svgrepo.com/show/530448/robot.svg',
			},
			{
				text: 'Learning path customization',
				icon: 'https://www.svgrepo.com/show/530311/route.svg',
			},
			{
				text: 'Access to course materials',
				icon: 'https://www.svgrepo.com/show/530253/book-opened.svg',
			},
		],
		illustration: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80',
		cta: 'Start Learning',
	},
	{
		name: '6 Months',
		price: 39,
		description: 'Most popular plan for serious learners',
		icon: 'https://www.svgrepo.com/show/530228/diamond.svg',
		features: [
			{
				text: '24 one-on-one sessions',
				icon: 'https://www.svgrepo.com/show/530412/video-camera.svg',
			},
			{
				text: 'Unlimited project reviews',
				icon: 'https://www.svgrepo.com/show/530319/sheet.svg',
			},
			{
				text: '24/7 AI support access',
				icon: 'https://www.svgrepo.com/show/530448/robot.svg',
			},
			{
				text: 'Personalized learning path',
				icon: 'https://www.svgrepo.com/show/530311/route.svg',
			},
			{
				text: 'Interview preparation',
				icon: 'https://www.svgrepo.com/show/530410/user.svg',
			},
			{
				text: 'Job search assistance',
				icon: 'https://www.svgrepo.com/show/530238/flag.svg',
			},
		],
		illustration: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
		cta: 'Best Value',
		featured: true,
	},
	{
		name: '12 Months',
		price: 29,
		description: 'Comprehensive program for career changers',
		icon: 'https://www.svgrepo.com/show/530328/chart-vertical.svg',
		features: [
			{
				text: '48 one-on-one sessions',
				icon: 'https://www.svgrepo.com/show/530412/video-camera.svg',
			},
			{
				text: 'Priority mentor access',
				icon: 'https://www.svgrepo.com/show/530425/users-alt.svg',
			},
			{
				text: 'Advanced project building',
				icon: 'https://www.svgrepo.com/show/530319/sheet.svg',
			},
			{
				text: 'Career placement support',
				icon: 'https://www.svgrepo.com/show/530238/flag.svg',
			},
			{
				text: 'Resume review & LinkedIn optimization',
				icon: 'https://www.svgrepo.com/show/530410/user.svg',
			},
			{
				text: 'Mock interviews with feedback',
				icon: 'https://www.svgrepo.com/show/530235/calendar.svg',
			},
		],
		illustration: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80',
		cta: 'Get Started',
	},
];

export function Pricing() {
	return (
		<section className="relative py-20 sm:py-32 bg-gray-950">
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10" />
				<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_20%,rgba(0,0,0,0.8)_100%)]" />
			</div>

			<div className="container relative mx-auto px-4 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 mb-4">
						Pricing Plans
					</h2>
					<p className="text-gray-400 max-w-2xl mx-auto">
						Choose the perfect plan for your learning journey
					</p>
				</div>

				<div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
					{/* 3 Months Plan */}
					<div className="relative group">
						<div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl opacity-30 group-hover:opacity-100 transition-opacity blur"></div>
						<div className="relative p-8 bg-gray-900 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
							<div className="mb-6">
								<h3 className="text-xl font-semibold text-white mb-2">
									3 Months
								</h3>
								<p className="text-gray-400 text-sm">
									Perfect for beginners starting their coding journey
								</p>
							</div>

							<div className="mb-6">
								<span className="text-4xl font-bold text-white">$49</span>
								<span className="text-gray-400">/hour</span>
							</div>

							<ul className="space-y-4 mb-8">
								<li className="flex items-center text-gray-300">
									<svg
										className="w-5 h-5 mr-2 text-indigo-500"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
									</svg>
									12 one-on-one sessions
								</li>
								<li className="flex items-center text-gray-300">
									<svg
										className="w-5 h-5 mr-2 text-indigo-500"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
									</svg>
									Basic project reviews
								</li>
								<li className="flex items-center text-gray-300">
									<svg
										className="w-5 h-5 mr-2 text-indigo-500"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
									</svg>
									AI support during business hours
								</li>
							</ul>

							<button className="w-full py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold hover:from-indigo-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 cursor-pointer hover:shadow-lg hover:shadow-indigo-500/25">
								Start Learning
							</button>
						</div>
					</div>

					{/* 6 Months Plan - Popular */}
					<div className="relative group">
						<div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl opacity-75 group-hover:opacity-100 transition-opacity blur"></div>
						<div className="relative p-8 bg-gray-900 rounded-xl border border-indigo-500/50 hover:border-indigo-500 transition-colors">
							<div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm font-medium">
								Most Popular
							</div>

							<div className="mb-6">
								<h3 className="text-xl font-semibold text-white mb-2">
									6 Months
								</h3>
								<p className="text-gray-400 text-sm">
									Most popular plan for serious learners
								</p>
							</div>

							<div className="mb-6">
								<span className="text-4xl font-bold text-white">$39</span>
								<span className="text-gray-400">/hour</span>
							</div>

							<ul className="space-y-4 mb-8">
								<li className="flex items-center text-gray-300">
									<svg
										className="w-5 h-5 mr-2 text-indigo-500"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
									</svg>
									24 one-on-one sessions
								</li>
								<li className="flex items-center text-gray-300">
									<svg
										className="w-5 h-5 mr-2 text-indigo-500"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
									</svg>
									Unlimited project reviews
								</li>
								<li className="flex items-center text-gray-300">
									<svg
										className="w-5 h-5 mr-2 text-indigo-500"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
									</svg>
									24/7 AI support access
								</li>
								<li className="flex items-center text-gray-300">
									<svg
										className="w-5 h-5 mr-2 text-indigo-500"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
									</svg>
									Job search assistance
								</li>
							</ul>

							<button className="w-full py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold hover:from-indigo-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 cursor-pointer hover:shadow-lg hover:shadow-indigo-500/25">
								Start Learning
							</button>
						</div>
					</div>

					{/* 12 Months Plan */}
					<div className="relative group">
						<div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl opacity-30 group-hover:opacity-100 transition-opacity blur"></div>
						<div className="relative p-8 bg-gray-900 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
							<div className="mb-6">
								<h3 className="text-xl font-semibold text-white mb-2">
									12 Months
								</h3>
								<p className="text-gray-400 text-sm">
									Comprehensive program for career changers
								</p>
							</div>

							<div className="mb-6">
								<span className="text-4xl font-bold text-white">$29</span>
								<span className="text-gray-400">/hour</span>
							</div>

							<ul className="space-y-4 mb-8">
								<li className="flex items-center text-gray-300">
									<svg
										className="w-5 h-5 mr-2 text-indigo-500"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
									</svg>
									48 one-on-one sessions
								</li>
								<li className="flex items-center text-gray-300">
									<svg
										className="w-5 h-5 mr-2 text-indigo-500"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
									</svg>
									Priority mentor access
								</li>
								<li className="flex items-center text-gray-300">
									<svg
										className="w-5 h-5 mr-2 text-indigo-500"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
									</svg>
									Advanced project building
								</li>
								<li className="flex items-center text-gray-300">
									<svg
										className="w-5 h-5 mr-2 text-indigo-500"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
									</svg>
									Career placement support
								</li>
							</ul>

							<button className="w-full py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold hover:from-indigo-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 cursor-pointer hover:shadow-lg hover:shadow-indigo-500/25">
								Start Learning
							</button>
						</div>
					</div>
				</div>

				<div className="mt-12 text-center">
					<p className="inline-flex items-center gap-2 text-gray-400 border border-gray-800 rounded-full px-4 py-2">
						<svg
							className="w-5 h-5 text-indigo-500"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
							/>
						</svg>
						30-day money-back guarantee
					</p>
				</div>
			</div>
		</section>
	);
}