package protos

import profilesv1 "github.com/weaveworks/profiles/api/v1alpha1"

// TransformCatalogEntry takes a Kubernetes catalog entry and creates a proto catalog entry out of it.
func TransformCatalogEntry(origin *profilesv1.ProfileCatalogEntry) *ProfileCatalogEntry {
	return &ProfileCatalogEntry{
		Tag:           origin.Tag,
		CatalogSource: origin.CatalogSource,
		Url:           origin.URL,
		Name:          origin.ProfileDescription.Name,
		Description:   origin.ProfileDescription.Description,
		Maintainer:    origin.ProfileDescription.Maintainer,
		Prerequisites: origin.ProfileDescription.Prerequisites,
	}
}

// TransformCatalogEntryList takes a slice of Kubernetes catalog entries and creates a proto catalog entry slice out of it.
func TransformCatalogEntryList(origins []profilesv1.ProfileCatalogEntry) []*ProfileCatalogEntry {
	var result []*ProfileCatalogEntry
	for _, origin := range origins {
		result = append(result, TransformCatalogEntry(&origin))
	}
	return result
}
