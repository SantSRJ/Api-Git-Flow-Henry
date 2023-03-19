import useSWR from 'swr';
import { swGet } from '../../utils/fetcher';
import Table from '../Table';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Model',
    dataIndex: 'model',
    key: 'model',
  },
  {
    title: 'Passengers',
    dataIndex: 'passengers',
    key: 'passengers',
    render: (passengers: string) =>
      parseInt(passengers)
        ? parseInt(passengers).toLocaleString('es-AR')
        : passengers,
  },
  {
    title: 'Cantidad de films',
    dataIndex: 'films',
    key: 'films',
    render: (residents: string[]) => residents.length,
  },
];

const Vehicles = () => {
  const { data, error } = useSWR('/vehicles', swGet);

  if (error) {
    return <div className="px-2">Oh oh!</div>;
  }
  if (!data) {
    return <div className="px-2">Loading...</div>;
  }

  return (
    <div>
      <Table columns={columns} data={data.results} />
    </div>
  );
};

export default Vehicles;