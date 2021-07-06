// Code generated by counterfeiter. DO NOT EDIT.
package fakes

import (
	"sync"

	"github.com/go-logr/logr"
	"github.com/weaveworks/profiles/api/v1alpha1"
	"github.com/weaveworks/profiles/pkg/api"
)

type FakeCatalog struct {
	GetStub        func(string, string) *v1alpha1.ProfileCatalogEntry
	getMutex       sync.RWMutex
	getArgsForCall []struct {
		arg1 string
		arg2 string
	}
	getReturns struct {
		result1 *v1alpha1.ProfileCatalogEntry
	}
	getReturnsOnCall map[int]struct {
		result1 *v1alpha1.ProfileCatalogEntry
	}
	GetWithVersionStub        func(logr.Logger, string, string, string) *v1alpha1.ProfileCatalogEntry
	getWithVersionMutex       sync.RWMutex
	getWithVersionArgsForCall []struct {
		arg1 logr.Logger
		arg2 string
		arg3 string
		arg4 string
	}
	getWithVersionReturns struct {
		result1 *v1alpha1.ProfileCatalogEntry
	}
	getWithVersionReturnsOnCall map[int]struct {
		result1 *v1alpha1.ProfileCatalogEntry
	}
	ProfilesGreaterThanVersionStub        func(logr.Logger, string, string, string) []v1alpha1.ProfileCatalogEntry
	profilesGreaterThanVersionMutex       sync.RWMutex
	profilesGreaterThanVersionArgsForCall []struct {
		arg1 logr.Logger
		arg2 string
		arg3 string
		arg4 string
	}
	profilesGreaterThanVersionReturns struct {
		result1 []v1alpha1.ProfileCatalogEntry
	}
	profilesGreaterThanVersionReturnsOnCall map[int]struct {
		result1 []v1alpha1.ProfileCatalogEntry
	}
	SearchStub        func(string) []v1alpha1.ProfileCatalogEntry
	searchMutex       sync.RWMutex
	searchArgsForCall []struct {
		arg1 string
	}
	searchReturns struct {
		result1 []v1alpha1.ProfileCatalogEntry
	}
	searchReturnsOnCall map[int]struct {
		result1 []v1alpha1.ProfileCatalogEntry
	}
	SearchAllStub        func() []v1alpha1.ProfileCatalogEntry
	searchAllMutex       sync.RWMutex
	searchAllArgsForCall []struct {
	}
	searchAllReturns struct {
		result1 []v1alpha1.ProfileCatalogEntry
	}
	searchAllReturnsOnCall map[int]struct {
		result1 []v1alpha1.ProfileCatalogEntry
	}
	invocations      map[string][][]interface{}
	invocationsMutex sync.RWMutex
}

func (fake *FakeCatalog) Get(arg1 string, arg2 string) *v1alpha1.ProfileCatalogEntry {
	fake.getMutex.Lock()
	ret, specificReturn := fake.getReturnsOnCall[len(fake.getArgsForCall)]
	fake.getArgsForCall = append(fake.getArgsForCall, struct {
		arg1 string
		arg2 string
	}{arg1, arg2})
	stub := fake.GetStub
	fakeReturns := fake.getReturns
	fake.recordInvocation("Get", []interface{}{arg1, arg2})
	fake.getMutex.Unlock()
	if stub != nil {
		return stub(arg1, arg2)
	}
	if specificReturn {
		return ret.result1
	}
	return fakeReturns.result1
}

func (fake *FakeCatalog) GetCallCount() int {
	fake.getMutex.RLock()
	defer fake.getMutex.RUnlock()
	return len(fake.getArgsForCall)
}

func (fake *FakeCatalog) GetCalls(stub func(string, string) *v1alpha1.ProfileCatalogEntry) {
	fake.getMutex.Lock()
	defer fake.getMutex.Unlock()
	fake.GetStub = stub
}

func (fake *FakeCatalog) GetArgsForCall(i int) (string, string) {
	fake.getMutex.RLock()
	defer fake.getMutex.RUnlock()
	argsForCall := fake.getArgsForCall[i]
	return argsForCall.arg1, argsForCall.arg2
}

func (fake *FakeCatalog) GetReturns(result1 *v1alpha1.ProfileCatalogEntry) {
	fake.getMutex.Lock()
	defer fake.getMutex.Unlock()
	fake.GetStub = nil
	fake.getReturns = struct {
		result1 *v1alpha1.ProfileCatalogEntry
	}{result1}
}

func (fake *FakeCatalog) GetReturnsOnCall(i int, result1 *v1alpha1.ProfileCatalogEntry) {
	fake.getMutex.Lock()
	defer fake.getMutex.Unlock()
	fake.GetStub = nil
	if fake.getReturnsOnCall == nil {
		fake.getReturnsOnCall = make(map[int]struct {
			result1 *v1alpha1.ProfileCatalogEntry
		})
	}
	fake.getReturnsOnCall[i] = struct {
		result1 *v1alpha1.ProfileCatalogEntry
	}{result1}
}

func (fake *FakeCatalog) GetWithVersion(arg1 logr.Logger, arg2 string, arg3 string, arg4 string) *v1alpha1.ProfileCatalogEntry {
	fake.getWithVersionMutex.Lock()
	ret, specificReturn := fake.getWithVersionReturnsOnCall[len(fake.getWithVersionArgsForCall)]
	fake.getWithVersionArgsForCall = append(fake.getWithVersionArgsForCall, struct {
		arg1 logr.Logger
		arg2 string
		arg3 string
		arg4 string
	}{arg1, arg2, arg3, arg4})
	stub := fake.GetWithVersionStub
	fakeReturns := fake.getWithVersionReturns
	fake.recordInvocation("GetWithVersion", []interface{}{arg1, arg2, arg3, arg4})
	fake.getWithVersionMutex.Unlock()
	if stub != nil {
		return stub(arg1, arg2, arg3, arg4)
	}
	if specificReturn {
		return ret.result1
	}
	return fakeReturns.result1
}

func (fake *FakeCatalog) GetWithVersionCallCount() int {
	fake.getWithVersionMutex.RLock()
	defer fake.getWithVersionMutex.RUnlock()
	return len(fake.getWithVersionArgsForCall)
}

func (fake *FakeCatalog) GetWithVersionCalls(stub func(logr.Logger, string, string, string) *v1alpha1.ProfileCatalogEntry) {
	fake.getWithVersionMutex.Lock()
	defer fake.getWithVersionMutex.Unlock()
	fake.GetWithVersionStub = stub
}

func (fake *FakeCatalog) GetWithVersionArgsForCall(i int) (logr.Logger, string, string, string) {
	fake.getWithVersionMutex.RLock()
	defer fake.getWithVersionMutex.RUnlock()
	argsForCall := fake.getWithVersionArgsForCall[i]
	return argsForCall.arg1, argsForCall.arg2, argsForCall.arg3, argsForCall.arg4
}

func (fake *FakeCatalog) GetWithVersionReturns(result1 *v1alpha1.ProfileCatalogEntry) {
	fake.getWithVersionMutex.Lock()
	defer fake.getWithVersionMutex.Unlock()
	fake.GetWithVersionStub = nil
	fake.getWithVersionReturns = struct {
		result1 *v1alpha1.ProfileCatalogEntry
	}{result1}
}

func (fake *FakeCatalog) GetWithVersionReturnsOnCall(i int, result1 *v1alpha1.ProfileCatalogEntry) {
	fake.getWithVersionMutex.Lock()
	defer fake.getWithVersionMutex.Unlock()
	fake.GetWithVersionStub = nil
	if fake.getWithVersionReturnsOnCall == nil {
		fake.getWithVersionReturnsOnCall = make(map[int]struct {
			result1 *v1alpha1.ProfileCatalogEntry
		})
	}
	fake.getWithVersionReturnsOnCall[i] = struct {
		result1 *v1alpha1.ProfileCatalogEntry
	}{result1}
}

func (fake *FakeCatalog) ProfilesGreaterThanVersion(arg1 logr.Logger, arg2 string, arg3 string, arg4 string) []v1alpha1.ProfileCatalogEntry {
	fake.profilesGreaterThanVersionMutex.Lock()
	ret, specificReturn := fake.profilesGreaterThanVersionReturnsOnCall[len(fake.profilesGreaterThanVersionArgsForCall)]
	fake.profilesGreaterThanVersionArgsForCall = append(fake.profilesGreaterThanVersionArgsForCall, struct {
		arg1 logr.Logger
		arg2 string
		arg3 string
		arg4 string
	}{arg1, arg2, arg3, arg4})
	stub := fake.ProfilesGreaterThanVersionStub
	fakeReturns := fake.profilesGreaterThanVersionReturns
	fake.recordInvocation("ProfilesGreaterThanVersion", []interface{}{arg1, arg2, arg3, arg4})
	fake.profilesGreaterThanVersionMutex.Unlock()
	if stub != nil {
		return stub(arg1, arg2, arg3, arg4)
	}
	if specificReturn {
		return ret.result1
	}
	return fakeReturns.result1
}

func (fake *FakeCatalog) ProfilesGreaterThanVersionCallCount() int {
	fake.profilesGreaterThanVersionMutex.RLock()
	defer fake.profilesGreaterThanVersionMutex.RUnlock()
	return len(fake.profilesGreaterThanVersionArgsForCall)
}

func (fake *FakeCatalog) ProfilesGreaterThanVersionCalls(stub func(logr.Logger, string, string, string) []v1alpha1.ProfileCatalogEntry) {
	fake.profilesGreaterThanVersionMutex.Lock()
	defer fake.profilesGreaterThanVersionMutex.Unlock()
	fake.ProfilesGreaterThanVersionStub = stub
}

func (fake *FakeCatalog) ProfilesGreaterThanVersionArgsForCall(i int) (logr.Logger, string, string, string) {
	fake.profilesGreaterThanVersionMutex.RLock()
	defer fake.profilesGreaterThanVersionMutex.RUnlock()
	argsForCall := fake.profilesGreaterThanVersionArgsForCall[i]
	return argsForCall.arg1, argsForCall.arg2, argsForCall.arg3, argsForCall.arg4
}

func (fake *FakeCatalog) ProfilesGreaterThanVersionReturns(result1 []v1alpha1.ProfileCatalogEntry) {
	fake.profilesGreaterThanVersionMutex.Lock()
	defer fake.profilesGreaterThanVersionMutex.Unlock()
	fake.ProfilesGreaterThanVersionStub = nil
	fake.profilesGreaterThanVersionReturns = struct {
		result1 []v1alpha1.ProfileCatalogEntry
	}{result1}
}

func (fake *FakeCatalog) ProfilesGreaterThanVersionReturnsOnCall(i int, result1 []v1alpha1.ProfileCatalogEntry) {
	fake.profilesGreaterThanVersionMutex.Lock()
	defer fake.profilesGreaterThanVersionMutex.Unlock()
	fake.ProfilesGreaterThanVersionStub = nil
	if fake.profilesGreaterThanVersionReturnsOnCall == nil {
		fake.profilesGreaterThanVersionReturnsOnCall = make(map[int]struct {
			result1 []v1alpha1.ProfileCatalogEntry
		})
	}
	fake.profilesGreaterThanVersionReturnsOnCall[i] = struct {
		result1 []v1alpha1.ProfileCatalogEntry
	}{result1}
}

func (fake *FakeCatalog) Search(arg1 string) []v1alpha1.ProfileCatalogEntry {
	fake.searchMutex.Lock()
	ret, specificReturn := fake.searchReturnsOnCall[len(fake.searchArgsForCall)]
	fake.searchArgsForCall = append(fake.searchArgsForCall, struct {
		arg1 string
	}{arg1})
	stub := fake.SearchStub
	fakeReturns := fake.searchReturns
	fake.recordInvocation("Search", []interface{}{arg1})
	fake.searchMutex.Unlock()
	if stub != nil {
		return stub(arg1)
	}
	if specificReturn {
		return ret.result1
	}
	return fakeReturns.result1
}

func (fake *FakeCatalog) SearchCallCount() int {
	fake.searchMutex.RLock()
	defer fake.searchMutex.RUnlock()
	return len(fake.searchArgsForCall)
}

func (fake *FakeCatalog) SearchCalls(stub func(string) []v1alpha1.ProfileCatalogEntry) {
	fake.searchMutex.Lock()
	defer fake.searchMutex.Unlock()
	fake.SearchStub = stub
}

func (fake *FakeCatalog) SearchArgsForCall(i int) string {
	fake.searchMutex.RLock()
	defer fake.searchMutex.RUnlock()
	argsForCall := fake.searchArgsForCall[i]
	return argsForCall.arg1
}

func (fake *FakeCatalog) SearchReturns(result1 []v1alpha1.ProfileCatalogEntry) {
	fake.searchMutex.Lock()
	defer fake.searchMutex.Unlock()
	fake.SearchStub = nil
	fake.searchReturns = struct {
		result1 []v1alpha1.ProfileCatalogEntry
	}{result1}
}

func (fake *FakeCatalog) SearchReturnsOnCall(i int, result1 []v1alpha1.ProfileCatalogEntry) {
	fake.searchMutex.Lock()
	defer fake.searchMutex.Unlock()
	fake.SearchStub = nil
	if fake.searchReturnsOnCall == nil {
		fake.searchReturnsOnCall = make(map[int]struct {
			result1 []v1alpha1.ProfileCatalogEntry
		})
	}
	fake.searchReturnsOnCall[i] = struct {
		result1 []v1alpha1.ProfileCatalogEntry
	}{result1}
}

func (fake *FakeCatalog) SearchAll() []v1alpha1.ProfileCatalogEntry {
	fake.searchAllMutex.Lock()
	ret, specificReturn := fake.searchAllReturnsOnCall[len(fake.searchAllArgsForCall)]
	fake.searchAllArgsForCall = append(fake.searchAllArgsForCall, struct {
	}{})
	stub := fake.SearchAllStub
	fakeReturns := fake.searchAllReturns
	fake.recordInvocation("SearchAll", []interface{}{})
	fake.searchAllMutex.Unlock()
	if stub != nil {
		return stub()
	}
	if specificReturn {
		return ret.result1
	}
	return fakeReturns.result1
}

func (fake *FakeCatalog) SearchAllCallCount() int {
	fake.searchAllMutex.RLock()
	defer fake.searchAllMutex.RUnlock()
	return len(fake.searchAllArgsForCall)
}

func (fake *FakeCatalog) SearchAllCalls(stub func() []v1alpha1.ProfileCatalogEntry) {
	fake.searchAllMutex.Lock()
	defer fake.searchAllMutex.Unlock()
	fake.SearchAllStub = stub
}

func (fake *FakeCatalog) SearchAllReturns(result1 []v1alpha1.ProfileCatalogEntry) {
	fake.searchAllMutex.Lock()
	defer fake.searchAllMutex.Unlock()
	fake.SearchAllStub = nil
	fake.searchAllReturns = struct {
		result1 []v1alpha1.ProfileCatalogEntry
	}{result1}
}

func (fake *FakeCatalog) SearchAllReturnsOnCall(i int, result1 []v1alpha1.ProfileCatalogEntry) {
	fake.searchAllMutex.Lock()
	defer fake.searchAllMutex.Unlock()
	fake.SearchAllStub = nil
	if fake.searchAllReturnsOnCall == nil {
		fake.searchAllReturnsOnCall = make(map[int]struct {
			result1 []v1alpha1.ProfileCatalogEntry
		})
	}
	fake.searchAllReturnsOnCall[i] = struct {
		result1 []v1alpha1.ProfileCatalogEntry
	}{result1}
}

func (fake *FakeCatalog) Invocations() map[string][][]interface{} {
	fake.invocationsMutex.RLock()
	defer fake.invocationsMutex.RUnlock()
	fake.getMutex.RLock()
	defer fake.getMutex.RUnlock()
	fake.getWithVersionMutex.RLock()
	defer fake.getWithVersionMutex.RUnlock()
	fake.profilesGreaterThanVersionMutex.RLock()
	defer fake.profilesGreaterThanVersionMutex.RUnlock()
	fake.searchMutex.RLock()
	defer fake.searchMutex.RUnlock()
	fake.searchAllMutex.RLock()
	defer fake.searchAllMutex.RUnlock()
	copiedInvocations := map[string][][]interface{}{}
	for key, value := range fake.invocations {
		copiedInvocations[key] = value
	}
	return copiedInvocations
}

func (fake *FakeCatalog) recordInvocation(key string, args []interface{}) {
	fake.invocationsMutex.Lock()
	defer fake.invocationsMutex.Unlock()
	if fake.invocations == nil {
		fake.invocations = map[string][][]interface{}{}
	}
	if fake.invocations[key] == nil {
		fake.invocations[key] = [][]interface{}{}
	}
	fake.invocations[key] = append(fake.invocations[key], args)
}

var _ api.Catalog = new(FakeCatalog)