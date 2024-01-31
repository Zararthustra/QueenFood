import { Tabs } from 'antd';

import { IconScan, IconSearch } from '@assets/index';
import { FoodScan } from '@components/FoodScan';
import { FoodSearch } from '@components/FoodSearch';

export const Food = () => {
  return (
    <>
      <main
        data-testid="aliments"
        className="mb-[50px] flex flex-col items-center px-2">
        <h1 className="my-5 text-center dark:text-slate-100">Aliments</h1>
        <div className="w-full">
          <Tabs
            defaultActiveKey="1"
            size="small"
            centered
            className="dark:text-slate-100"
            items={[
              {
                label: (
                  <div className="flex items-center gap-2">
                    <IconScan />
                    <h2>Scan</h2>
                  </div>
                ),
                key: '1',
                children: (
                  <div className="flex flex-col items-center">
                    <FoodScan />
                  </div>
                )
              },
              {
                label: (
                  <div className="flex items-center gap-2">
                    <IconSearch />
                    <h2>Catégories</h2>
                  </div>
                ),
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
