import DrSvg from '../../public/DrSvg';

export default function Example() {
	return (
    <div className='relative bg-white'>
			<div className='mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8'>
				<div className='px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6'>
					<div className='mx-auto max-w-2xl lg:mx-0'>
						<DrSvg className={'h-64 mb-48'} />
						<div className='hidden sm:mt-32 sm:flex lg:mt-16'>
							<div className='relative rounded-full px-3 py-1 text-sm leading-6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20'>
								The right choice for your kitchen or bathroom
								renovations.{' '}
								<a
									href='#'
									className='whitespace-nowrap font-semibold text-yellow-800'
								>
									<span
										className='absolute inset-0'
										aria-hidden='true'
									/>
									Read more{' '}
									<span aria-hidden='true'>&rarr;</span>
								</a>
							</div>
						</div>
						<h1 className='mt-24 text-4xl font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-6xl'>
							{/* Cabinet refacing to simplify your renovations */}
							Custom cabinet and drawer fronts to simplify your
							renovations
						</h1>
						<p className='mt-6 text-lg leading-8 text-gray-600'>
							Transform your units in days, not weeks! Discover
							fast, reliable cabinet refacing with unmatched
							service. Get started today and wow your prospective
							tenants!
						</p>
						<div className='mt-10 flex items-center gap-x-6'>
							<a
								href='#'
								className='rounded-md bg-yellow-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-yellow-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
							>
								Get started
							</a>
							<a
								href='#'
								className='text-sm font-semibold leading-6 text-gray-900'
							>
								Learn more <span aria-hidden='true'>→</span>
							</a>
						</div>
					</div>
				</div>
				<div className='relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0'>
					<img
						className='aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full'
						src='https://images.unsplash.com/photo-1562967914-5d7f3f6f8b3b?auto=format&fit=crop&w=700&q=80'
						alt='Kitchen with white cabinets and stainless steel appliances'
					/>
				</div>
			</div>
		</div>
	);
}
