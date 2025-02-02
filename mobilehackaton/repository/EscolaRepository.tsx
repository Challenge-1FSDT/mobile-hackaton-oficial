import { ENDPOINTS } from './../base/Endpoints'; 

export const listarEscola = async () => {

    const url = ENDPOINTS.GET_LISTAR_ESCOLAS;

    //este token é de teste e precisa ser trocado todo dia
    let token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFsdW5vQGZpYXAuY29tIiwic3ViIjozLCJyb2xlIjoiVVNFUiIsImlhdCI6MTczODQ1Njk1MSwiZXhwIjoxNzM4NTQzMzUxfQ.SyEwSDMKC3CeR4BENyoDfwMK3zkbOL3sjjcHeZB1Vjbim-9wTJiiptSQxlQzCFwdg_e-dGlPQMSni9UvOVHwL0usdNulZqacNK7ja0vQroM8Kcug1YLzqBkvfls2P7I75nivlgI78NUOpCkoZhv7xYhZFXlXwertCA5B9wpCd_590wHLN30uKhcsYlXOv_sGpodQ96S8ZDYDcM4ABxMCZ24J7JYECiJJN3BzjrwkOiDKbdICvA2GI847SdEbkzsCiPtXGwnNZrlikXpDWxHTLDLhTzl1e9lZPyuNSsmzoqzs5_jTldeWRrSFOg-XaYxtaVX96l6LYJp8vDkCzPrHaA'; 
    
    //const {token} = useAuth();
    console.log('>> listarEscola.token >>'+token);

    try {
        const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': ''+token
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