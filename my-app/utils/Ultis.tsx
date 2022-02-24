import { Alert, AlertTitle } from "@mui/material";

export function ErrorHandler(error: any) {
    return (
        <Alert variant="filled" severity="error" style={{ width: 500 }}>
            <AlertTitle>Error</AlertTitle>
            {(error as Error).message}
        </Alert>
    )
}
export function subaddress(address: string) {
    if (address) {
        var sub = address.substring(0, 5);
        var sub2 = address.substring(address.length - 5, address.length);
        return sub + '....' + sub2;
    }
    return '';
}
export async function getTxhash(address: string) {
    // Implement
    return 'true';
}