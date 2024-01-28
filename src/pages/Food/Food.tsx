import { Tabs } from 'antd';

import { FoodScan } from '@components/FoodScan';
import { FoodSearch } from '@components/FoodSearch';

export const Food = () => {
  return (
    <>
      <main
        data-testid="aliments"
        className="mb-[50px] flex flex-col items-center px-2">
        <h1 className="my-5 text-center dark:text-slate-100">Aliments</h1>
        <div className="w-full max-w-[500px]">
          <Tabs
            defaultActiveKey="1"
            className="dark:text-slate-100"
            items={[
              {
                label: <h2>Scan</h2>,
                key: '1',
                children: (
                  <div className="flex flex-col items-center">
                    <FoodScan />
                  </div>
                )
              },
              {
                label: <h2>Catégories</h2>,
                key: '2',
                children: (
                  <div className="flex flex-col items-center">
                    <FoodSearch />
                  </div>
                )
              }
            ]}
          />
        </div>
      </main>
    </>
  );
};
