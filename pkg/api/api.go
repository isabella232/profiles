package api

import (
	"encoding/json"
	"net/http"

	"github.com/gorilla/mux"
	"github.com/weaveworks/profiles/pkg/catalog"
)

type API struct {
	*mux.Router
	profileCatalog *catalog.Catalog
}

func New(profileCatalog *catalog.Catalog) API {
	r := mux.NewRouter()
	a := API{
		Router:         r,
		profileCatalog: profileCatalog,
	}

	r.HandleFunc("/profiles", a.ProfilesHandler)
	return a
}

func (a *API) ProfilesHandler(w http.ResponseWriter, r *http.Request) {
	profileName := r.URL.Query().Get("name")
	out, err := json.Marshal(a.profileCatalog.Search(profileName))
	if err != nil {
		panic(err)
	}
	_, err = w.Write(out)
	if err != nil {
		panic(err)
	}
}
