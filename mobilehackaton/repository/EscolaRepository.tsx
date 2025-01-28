import { ENDPOINTS } from './../base/Endpoints'; 

export const listarEscola = async () => {

    const url = ENDPOINTS.GET_LISTAR_ESCOLAS;
    //este token é de teste e precisa ser trocado todo dia
    let token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InByb2Zlc3NvckBmaWFwLmNvbSIsInN1YiI6Miwicm9sZSI6IlVTRVIiLCJpYXQiOjE3MzgwMjY5MDUsImV4cCI6MTczODExMzMwNX0.X7WxbXDzAsitExJKq7KMStCeqaJPwQXXZwWWhSK3DF7IHpIC66BvjaU9FJWx3Nq6RNv5lb0i5bWRwF41L8aFk3bZfMYKKDfSnEXByUV0wYBakvB2KA6kZBJXpvM47-VIuGKMHiMGbZIJ0qBjD8DRHCEndlQFToczYGQVMymuKQsCjNOhTRxdQOAbIfH2F_4PlJjsKb2A17WpOrx9dr6iJvbfdrhF75EiHQqrZ1Zs1IWNjsb43EdukZVQPCt0pQpo0zQ2YgRK5uzSyKnyYplBhssDxLfPYyw7X0UN7K_7sfljOd6oFfZLnHXWaMWDzFDx49f_5XTWkAzdGyZQWrGx9w'; 
    
    try {
        const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Bearer Token': `${token}`
        },
        });

        if (!response.ok) {
        throw new Error(`HTTP status ${response.status}`);
        }

        return await response.json(); // Retorna os dados em caso de sucesso
    } catch (error : any) {

        throw new Error(`${error.message}`);

    }
};