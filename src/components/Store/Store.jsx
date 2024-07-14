import React, { useEffect, useState } from "react";
import HeroSection from "../HeroSection";
import DailyPickSection from "../DailypickSection"; 
import LadiesLoveSection from "../LadiesLove";
import MenWearsSection from "../MensWears";
import Footer from "../footer";
import { Button, Group } from '@mantine/core';

const fetchProducts = async ({ organization_id, reverse_sort, page, size, Appid, Apikey }) => {
  const url = new URL('https://timbu-get-all-products.reavdev.workers.dev/');
  url.searchParams.append('organization_id', organization_id);
  url.searchParams.append('reverse_sort', reverse_sort);
  url.searchParams.append('page', page);
  url.searchParams.append('size', size);
  url.searchParams.append('Appid', Appid);
  url.searchParams.append('Apikey', Apikey);

  const response = await fetch(url.toString());

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
};

const StorePage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const params = {
      organization_id: '8e57da2a3c1940e38b01bfa38d9ba15e',
      reverse_sort: 'false',
      page: page,
      size: 5,
      Appid: '797TOKMC9JK25M9',
      Apikey: 'f9686d61b37b44f5b79b679c8bcdc54520240713220722736057'
    };

    const getProducts = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const data = await fetchProducts(params);
        setProducts(data.items);
        setIsEmpty(data.total === 0);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getProducts();
  }, [page]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching products</div>;
  if (isEmpty) return <div>No products found</div>;

  return (
    <div className="mx-6">
      <HeroSection />
      {products.map(product => (
        <React.Fragment key={product.id}>
          <DailyPickSection product={product} />
          <LadiesLoveSection product={product} />
          <MenWearsSection product={product} />
        </React.Fragment>
      ))}
      <Group position="center" mt="md">
        <Button onClick={() => setPage(page > 1 ? page - 1 : 1)}>Prev</Button>
        <Button onClick={() => setPage(page + 1)}>Next</Button>
      </Group>
      <Footer />
    </div>
  );
};

export default StorePage;
