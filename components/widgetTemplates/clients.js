export default function ClientsWidget({ clients }) {
  const template = (clients) => {
    return (
      <div className='bg-white lg:px-12 p-8'>
        <h3 className='font-bold uppercase text-2xl mb-4'>MAJOR CLIENTS</h3>
        <div className='grid grid-cols-3 lg:flex flex-row items-center justify-center gap-5 overflow-x-auto'>
          {clients.map((client) => {
            return (
              <div
                key={client.id}
                className='w-28 h-12 sm:w-32 sm:h-20 bg-contain bg-no-repeat bg-center'
                style={{
                  backgroundImage: `url(${client._embedded['wp:featuredmedia'][0].source_url})`
                }}
              ></div>
            )
          })}
        </div>
      </div>
    )
  }
  return template(clients)
}
