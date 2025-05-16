export const createUser = async (event: any) => {
    const body = event.body;
    return {
      statusCode: 201,
      body: JSON.stringify({ message: 'User created', data: body }),
    };
  };
  