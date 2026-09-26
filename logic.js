// Lógica pura (sin DOM) para resolver la URL de API y validar captchaId.
(function (root) {
    var UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    var LOCAL_HOSTS = ["localhost", "127.0.0.1"];

    function isUuid(value) {
        return typeof value === "string" && UUID_RE.test(value);
    }

    // El override ?api= solo se acepta si apunta a localhost/127.0.0.1 (http o https).
    function resolveApiBaseUrl(defaultUrl, apiParam) {
        if (apiParam) {
            try {
                var u = new URL(apiParam);
                if ((u.protocol === "http:" || u.protocol === "https:") && LOCAL_HOSTS.indexOf(u.hostname) !== -1) {
                    return u.origin;
                }
            } catch (e) { /* override inválido: se ignora */ }
        }
        return String(defaultUrl || "").replace(/\/+$/, "");
    }

    var api = { isUuid: isUuid, resolveApiBaseUrl: resolveApiBaseUrl };
    if (typeof module !== "undefined" && module.exports) module.exports = api;
    else root.IdyllicCheckLogic = api;
})(typeof window !== "undefined" ? window : globalThis);
