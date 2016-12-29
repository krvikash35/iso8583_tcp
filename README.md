# tcp/ip iso8583 implementation  using nodejs


#Notes
web.client(load data)
* signleton service(construct service at main module/componenet level) - read and write data through service
* when application load, fetch data from cache/localstorage otherwise refresh from server
* if refresh from server then update the cache/localstorage
* when application already loaded, fetch data from in-memory
* listen for data changes, if any changes then update in-memory and cache/localstorage
