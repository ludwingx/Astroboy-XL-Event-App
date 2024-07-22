  import prisma from "@/lib/db";
  async function Clients() {
    const clients = await prisma.clients.findMany();
    console.log(clients);
    return (
      <div>
        <h1 >Clients</h1>
        <ul>
        {clients.map((client) => (
            <li key={client.id}>
              {client.name} {client.lastname} - {client.category} - {client.merch}
            </li>
          ))}
        </ul>


      </div>
    );
  }
  export default Clients
