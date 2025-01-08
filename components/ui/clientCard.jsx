import Image from 'next/image';

const ClientCard = ({ name, username, subscribers, videos, description, profileImage, links }) => {
  return (
    <div className="bg-black text-white rounded-lg p-5 flex items-center space-x-4 shadow-md">
      <div className="rounded-full overflow-hidden w-16 h-16">
        <Image src={profileImage} alt={name} width={64} height={64} />
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="text-sm">@{username} · {subscribers} subscribers · {videos} videos</p>
        <p className="text-sm truncate">{description}</p>
        <div className="mt-2 flex space-x-2">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className="text-blue-400 text-xs hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function Clients() {
    const clients = [
        {
          name: 'Jenny Hoyos',
          username: 'JennyHoyos',
          subscribers: '7.35M',
          videos: 221,
          description: 'Proving the best things in life are free!',
          profileImage: '/img/jenny.jpg', 
          links: [{ label: 'jennyhoyos.com', url: 'https://jennyhoyos.com' }]
        },
        {
          name: 'Tiffany Byrd Harrison',
          username: 'TiffanyByrdHarrison',
          subscribers: '22.1K',
          videos: 186,
          description: 'Breaking down media messaging in movies and entertainment',
          profileImage: '/img/tiffany.jpg', 
          links: [{ label: 'tiffanybyrdharrison', url: 'https://linktr.ee/tiffanybyrdharrison' }]
        },
        {
          name: 'Yadster',
          username: 'yadster',
          subscribers: '91.2k',
          videos: 47,
          description: 'Making money online while having Fun',
          profileImage: '/img/yadster.jpg', 
          links: [{ label: '', url: '' }]
        },
        {
          name: 'Luke Alexander',
          username: 'lukealexander',
          subscribers: '39.3k',
          videos: 232,
          description: 'Ive been documenting my journey from 0$ to million',
          profileImage: '/img/luke.jpg', 
          links: [{ label: 'closercartel.com', url: 'https://www.infooperator.com/optin-623408611724357746658' }]
        },
       
      ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {clients.map((client, index) => (
        <ClientCard key={index} {...client} />
      ))}
    </div>
  );
}
