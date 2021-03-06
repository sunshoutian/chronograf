package server

import "net/http"

// Logout chooses the correct provider logout route and redirects to it
func Logout(nextURL string, routes AuthRoutes) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		ctx := r.Context()
		principal, err := getPrincipal(ctx)
		if err != nil {
			http.Redirect(w, r, nextURL, http.StatusTemporaryRedirect)
			return
		}
		route, ok := routes.Lookup(principal.Issuer)
		if !ok {
			http.Redirect(w, r, nextURL, http.StatusTemporaryRedirect)
			return
		}
		http.Redirect(w, r, route.Logout, http.StatusTemporaryRedirect)
	}
}
