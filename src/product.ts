export const createProduct = async (event: any) => {
    const body = event.body;
    return {
      statusCode: 201,
      body: JSON.stringify({ message: 'Product created', data: body }),
    };
  };
  