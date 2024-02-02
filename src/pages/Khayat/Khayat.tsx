import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Collapse, Input } from 'antd';

import {
  IconCrown,
  IconCrownOutlined,
  IconDrink,
  IconInfo
} from '@assets/index';
import { KhayatItem } from '@components/index';
import { khayatList } from '@data/index';
import { labelShortener } from '@utils/formatters';

export const Khayat = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const isMobile = useMediaQuery({ query: '(max-width: 450px)' });
  const categories = [...new Set(khayatList.map((fiche) => fiche.catégorie))];
  const nutriSantéColors = [
    'bg-[#df1c0d]',
    'bg-[#EF454A]',
    'bg-[#EC687A]',
    'bg-[#D38CA5]',
    'bg-[#C2A8C6]',
    'bg-[#7BA6DB]',
    'bg-[#81A9DC]',
    'bg-[#7BA6DB]',
    'bg-[#5F8AC5]',
    'bg-[#352B64]'
  ];
  const nutriSantéDrinkColors = [
    'bg-[#F0484F]',
    'bg-[#D18AA3]',
    'bg-[#8EB0DF]',
    'bg-[#5574AE]'
  ];

  return (
    <>
      <main
        data-testid="khayat"
        className="mb-[50px] flex flex-col items-center px-2 dark:text-slate-100">
        <h1 className="my-5 text-center ">Fiches du Pr Khayat</h1>

        <Input
          id="search"
          placeholder="Rechercher une fiche"
          allowClear
          onChange={(event) => setSearchValue(event.target.value)}
          className="my-5"
          style={{ width: 220 }}
          data-testid="khayat-input"
        />

        <div className="bubble bubble--info my-5 max-w-prose text-blue-800">
          <IconInfo className="shrink-0" />
          <p>
            Ces fiches proviennent du livre{' '}
            <a
              className="font-bold underline"
              href="https://www.fnac.com/a17650821/David-Khayat-Votre-meilleure-ordonnance-est-dans-votre-assiette">
              L'ordonnance est dans votre assiette !
            </a>{' '}
            du Professeur David Khayat, Chef du service d'oncologie médicale de
            l'Hôpital de la Pitié-Salpêtrière à Paris.
          </p>
        </div>

        <div className="flex w-full max-w-[650px] flex-col flex-wrap justify-center gap-5">
          {/* List categories */}
          {categories.map((categorie, index) => (
            <div key={index}>
              <div className="flex items-center justify-between">
                <h2 data-testid="khayat-category-name" className="mb-2">
                  {categorie}
                </h2>
                <p className="pr-[2px] font-bold text-slate-400">
                  {
                    khayatList.filter(
                      (item) =>
                        item.catégorie === categorie &&
                        item.titre
                          .toLowerCase()
                          .includes(searchValue.toLowerCase())
                    ).length
                  }
                </p>
              </div>
              <Collapse
                ghost
                items={
                  // List fiches
                  khayatList
                    .filter(
                      (item) =>
                        item.catégorie === categorie &&
                        item.titre
                          .toLowerCase()
                          .includes(searchValue.toLowerCase())
                    )
                    .map((fiche, indexx) => ({
                      key: indexx + 1,
                      label: (
                        <h3
                          data-testid="khayat-fiche-name"
                          className="mb-[3px]">
                          {isMobile
                            ? labelShortener(fiche.titre, 30)
                            : fiche.titre}
                        </h3>
                      ),
                      children: (
                        <div className="flex justify-center">
                          <KhayatItem fiche={fiche} />
                        </div>
                      ),
                      extra: (
                        <div className="mb-[3px] flex items-center gap-2">
                          {fiche.boisson && (
                            <IconDrink width={17} height={17} />
                          )}
                          <p
                            className={
                              'rounded-full border-2 border-white px-[4px] py-[7px] text-xs font-bold text-white ' +
                              (fiche.boisson
                                ? nutriSantéDrinkColors[fiche.nutriSanté - 1]
                                : nutriSantéColors[fiche.nutriSanté - 1]) +
                              (isMobile ? '' : ' -tracking-[1px]')
                            }>
                            {fiche.nutriSanté}
                          </p>
                        </div>
                      )
                    }))
                }
                expandIcon={({ isActive }) =>
                  isActive ? (
                    <IconCrownOutlined className="mb-[3px]" />
                  ) : (
                    <IconCrown className="mb-[3px]" />
                  )
                }
              />
            </div>
          ))}
        </div>
      </main>
    </>
  );
};
