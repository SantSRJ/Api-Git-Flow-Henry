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
    title: 'Classification',
    dataIndex: 'classification',
    key: 'classification',
  },
  {
    title: 'Average height',
    dataIndex: 'average_height',
    key: 'average_height',
    render: (average_height: string) =>
      parseFloat(average_height)
        ? (parseFloat(average_height)/100).toFixed(2)
        : average_height,
  },
  {
    title: 'People',
    dataIndex: 'people',
    key: 'people',
    render: (people: string[]) => people.length,
  },
  {
    title: 'Cantidad de films',
    dataIndex: 'films',
    key: 'films',
    render: (films: string[]) => films.length,
  },
];

const Species = () => {
  const { data, error } = useSWR('/species', swGet);

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

export default Species;