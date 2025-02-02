// fetchInterceptor.ts

import { useAuth } from "../contexto/AuthContext";
/*
const customFetch = async (url: string, options: RequestInit = {}) => {
    //const token = 'seu-token-aqui'; // Pega o token de um local seguro, como AsyncStorage ou Redux
    const {token} = useAuth();

    // Adiciona cabeçalhos padrões (como Content-Type e Authorization)
    const headers = {
        'Content-Type': 'application/json',
        Authorization: token ? `Bearer ${token}` : '', // Adiciona o token no cabeçalho, se disponível
        ...options.headers, // Adiciona quaisquer outros cabeçalhos que forem passados
    };

    // Adiciona um tempo limite à requisição (exemplo)
    const timeout = 10000; // Tempo limite em milissegundos (10 segundos)
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    try {
        // Passa a opção de timeout e os cabeçalhos para o fetch
        const response = await fetch(url, {
        ...options,
        headers,
        signal: controller.signal, // Para abortar a requisição
        });

        clearTimeout(timeoutId); // Limpa o timeout se a requisição for concluída com sucesso

        if (!response.ok) {
        // Verifica se a resposta é bem-sucedida (status 2xx)
        throw new Error(`HTTP status ${response.status}`);
        }

        // Retorna o corpo da resposta se tudo correr bem
        return await response.json();
    } catch (error: any) {
        // Trata erros globais como timeout, ou erro no fetch
        if (error.name === 'AbortError') {
        throw new Error('A requisição demorou demais, por favor tente novamente.');
        }
        throw error; // Repassa outros erros
    }
};
  
export default customFetch;
  */