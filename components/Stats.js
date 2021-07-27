const stats = [
  { name: 'Projects', stat: '100+' },
  { name: 'Retention', stat: '88%' },
  { name: 'Client Retention', stat: '90%' },
  { name: 'Users Impacted', stat: '5,000+' },
]

export default function Stats() {
  return (
    <div>
      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {stats.map((item) => (
          <div
            key={item.name}
            className="px-5 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
            <dt className="text-sm font-medium text-gray-500 ">{item.name}</dt>
            <dd className="mt-1 mr-5 p-2 text-2xl font-semibold text-gray-900">
              {item.stat}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}