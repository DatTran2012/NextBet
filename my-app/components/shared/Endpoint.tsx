type EndpointConnect = {
    addressKey: string,
    parent: string
}
type EndpointBalance = {
    addressKey: string,
}

export const endpoints = {
    pickluck: {
        connect: {
            route: '/api/wallet/connect',
            body: { addressKey: null, parent: null } as EndpointConnect,
            method: 'post',
        },
        balance: {
            route: '/api/wallet/balance',
            body: { addressKey: null } as EndpointBalance,
            method: 'post',
        }
    }
}