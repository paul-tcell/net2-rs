var searchIndex = {};
searchIndex["net2"] = {"doc":"Extensions to `std::net` networking types.","items":[[3,"TcpBuilder","net2","An \"in progress\" TCP socket which has not yet been connected or listened.",null,null],[3,"UdpBuilder","","An \"in progress\" UDP socket which has not yet been connected.",null,null],[11,"new_v4","","Constructs a new TcpBuilder with the `AF_INET` domain, the `SOCK_STREAM` type, and with a protocol argument of 0.",0,{"inputs":[],"output":{"generics":["tcpbuilder"],"name":"result"}}],[11,"new_v6","","Constructs a new TcpBuilder with the `AF_INET6` domain, the `SOCK_STREAM` type, and with a protocol argument of 0.",0,{"inputs":[],"output":{"generics":["tcpbuilder"],"name":"result"}}],[11,"bind","","Binds this socket to the specified address.",0,{"inputs":[{"name":"self"},{"name":"t"}],"output":{"generics":["tcpbuilder"],"name":"result"}}],[11,"listen","","Mark a socket as ready to accept incoming connection requests using accept()",0,{"inputs":[{"name":"self"},{"name":"i32"}],"output":{"generics":["tcplistener"],"name":"result"}}],[11,"connect","","Initiate a connection on this socket to the specified address.",0,{"inputs":[{"name":"self"},{"name":"t"}],"output":{"generics":["tcpstream"],"name":"result"}}],[11,"to_tcp_stream","","Converts this builder into a `TcpStream`",0,{"inputs":[{"name":"self"}],"output":{"generics":["tcpstream"],"name":"result"}}],[11,"to_tcp_listener","","Converts this builder into a `TcpListener`",0,{"inputs":[{"name":"self"}],"output":{"generics":["tcplistener"],"name":"result"}}],[11,"local_addr","","Returns the address of the local half of this TCP socket.",0,{"inputs":[{"name":"self"}],"output":{"generics":["socketaddr"],"name":"result"}}],[11,"fmt","","",0,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new_v4","","Constructs a new UdpBuilder with the `AF_INET` domain, the `SOCK_DGRAM` type, and with a protocol argument of 0.",1,{"inputs":[],"output":{"generics":["udpbuilder"],"name":"result"}}],[11,"new_v6","","Constructs a new UdpBuilder with the `AF_INET6` domain, the `SOCK_DGRAM` type, and with a protocol argument of 0.",1,{"inputs":[],"output":{"generics":["udpbuilder"],"name":"result"}}],[11,"bind","","Binds this socket to the specified address.",1,{"inputs":[{"name":"self"},{"name":"t"}],"output":{"generics":["udpsocket"],"name":"result"}}],[11,"fmt","","",1,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"ttl","","Sets the value for the `IP_TTL` option on this socket.",0,{"inputs":[{"name":"self"},{"name":"u32"}],"output":{"name":"result"}}],[11,"only_v6","","Sets the value for the `IPV6_V6ONLY` option on this socket.",0,{"inputs":[{"name":"self"},{"name":"bool"}],"output":{"name":"result"}}],[11,"reuse_address","","Set value for the `SO_REUSEADDR` option on this socket.",0,{"inputs":[{"name":"self"},{"name":"bool"}],"output":{"name":"result"}}],[11,"get_reuse_address","","Check the `SO_REUSEADDR` option on this socket.",0,{"inputs":[{"name":"self"}],"output":{"generics":["bool"],"name":"result"}}],[11,"take_error","","Get the value of the `SO_ERROR` option on this socket.",0,{"inputs":[{"name":"self"}],"output":{"generics":["option"],"name":"result"}}],[11,"ttl","","Sets the value for the `IP_TTL` option on this socket.",1,{"inputs":[{"name":"self"},{"name":"u32"}],"output":{"name":"result"}}],[11,"only_v6","","Sets the value for the `IPV6_V6ONLY` option on this socket.",1,{"inputs":[{"name":"self"},{"name":"bool"}],"output":{"name":"result"}}],[11,"reuse_address","","Set value for the `SO_REUSEADDR` option on this socket.",1,{"inputs":[{"name":"self"},{"name":"bool"}],"output":{"name":"result"}}],[11,"get_reuse_address","","Check the `SO_REUSEADDR` option on this socket.",1,{"inputs":[{"name":"self"}],"output":{"generics":["bool"],"name":"result"}}],[11,"take_error","","Get the value of the `SO_ERROR` option on this socket.",1,{"inputs":[{"name":"self"}],"output":{"generics":["option"],"name":"result"}}],[11,"from_raw_fd","","",0,{"inputs":[{"name":"c_int"}],"output":{"name":"tcpbuilder"}}],[11,"as_raw_fd","","",0,{"inputs":[{"name":"self"}],"output":{"name":"c_int"}}],[11,"from_raw_fd","","",1,{"inputs":[{"name":"c_int"}],"output":{"name":"udpbuilder"}}],[11,"as_raw_fd","","",1,{"inputs":[{"name":"self"}],"output":{"name":"c_int"}}],[0,"unix","","Unix-specific extensions to the `std::net` types.",null,null],[8,"UnixTcpBuilderExt","net2::unix","Unix-specific extensions for the `TcpBuilder` type in this library.",null,null],[10,"reuse_port","","Set value for the `SO_REUSEPORT` option on this socket.",2,{"inputs":[{"name":"self"},{"name":"bool"}],"output":{"name":"result"}}],[10,"get_reuse_port","","Check the value of the `SO_REUSEPORT` option on this socket.",2,{"inputs":[{"name":"self"}],"output":{"generics":["bool"],"name":"result"}}],[8,"UnixUdpBuilderExt","","Unix-specific extensions for the `UdpBuilder` type in this library.",null,null],[10,"reuse_port","","Set value for the `SO_REUSEPORT` option on this socket.",3,{"inputs":[{"name":"self"},{"name":"bool"}],"output":{"name":"result"}}],[10,"get_reuse_port","","Check the value of the `SO_REUSEPORT` option on this socket.",3,{"inputs":[{"name":"self"}],"output":{"generics":["bool"],"name":"result"}}],[11,"reuse_port","net2","",0,{"inputs":[{"name":"self"},{"name":"bool"}],"output":{"name":"result"}}],[11,"get_reuse_port","","",0,{"inputs":[{"name":"self"}],"output":{"generics":["bool"],"name":"result"}}],[11,"reuse_port","","",1,{"inputs":[{"name":"self"},{"name":"bool"}],"output":{"name":"result"}}],[11,"get_reuse_port","","",1,{"inputs":[{"name":"self"}],"output":{"generics":["bool"],"name":"result"}}],[8,"TcpStreamExt","","Extension methods for the standard [`TcpStream` type][link] in `std::net`.",null,null],[10,"set_nodelay","","Sets the value of the `TCP_NODELAY` option on this socket.",4,{"inputs":[{"name":"self"},{"name":"bool"}],"output":{"name":"result"}}],[10,"nodelay","","Gets the value of the `TCP_NODELAY` option on this socket.",4,{"inputs":[{"name":"self"}],"output":{"generics":["bool"],"name":"result"}}],[10,"set_recv_buffer_size","","Sets the value of the `SO_RCVBUF` option on this socket.",4,{"inputs":[{"name":"self"},{"name":"usize"}],"output":{"name":"result"}}],[10,"recv_buffer_size","","Gets the value of the `SO_RCVBUF` option on this socket.",4,{"inputs":[{"name":"self"}],"output":{"generics":["usize"],"name":"result"}}],[10,"set_send_buffer_size","","Sets the value of the `SO_SNDBUF` option on this socket.",4,{"inputs":[{"name":"self"},{"name":"usize"}],"output":{"name":"result"}}],[10,"send_buffer_size","","Gets the value of the `SO_SNDBUF` option on this socket.",4,{"inputs":[{"name":"self"}],"output":{"generics":["usize"],"name":"result"}}],[10,"set_keepalive_ms","","Sets whether keepalive messages are enabled to be sent on this socket.",4,{"inputs":[{"name":"self"},{"generics":["u32"],"name":"option"}],"output":{"name":"result"}}],[10,"keepalive_ms","","Returns whether keepalive messages are enabled on this socket, and if so the amount of milliseconds between them.",4,{"inputs":[{"name":"self"}],"output":{"generics":["option"],"name":"result"}}],[10,"set_keepalive","","Sets whether keepalive messages are enabled to be sent on this socket.",4,{"inputs":[{"name":"self"},{"generics":["duration"],"name":"option"}],"output":{"name":"result"}}],[10,"keepalive","","Returns whether keepalive messages are enabled on this socket, and if so the duration of time between them.",4,{"inputs":[{"name":"self"}],"output":{"generics":["option"],"name":"result"}}],[10,"set_read_timeout_ms","","Sets the `SO_RCVTIMEO` option for this socket.",4,{"inputs":[{"name":"self"},{"generics":["u32"],"name":"option"}],"output":{"name":"result"}}],[10,"set_read_timeout","","Sets the `SO_RCVTIMEO` option for this socket.",4,{"inputs":[{"name":"self"},{"generics":["duration"],"name":"option"}],"output":{"name":"result"}}],[10,"read_timeout_ms","","Gets the value of the `SO_RCVTIMEO` option for this socket.",4,{"inputs":[{"name":"self"}],"output":{"generics":["option"],"name":"result"}}],[10,"read_timeout","","Gets the value of the `SO_RCVTIMEO` option for this socket.",4,{"inputs":[{"name":"self"}],"output":{"generics":["option"],"name":"result"}}],[10,"set_write_timeout_ms","","Sets the `SO_SNDTIMEO` option for this socket.",4,{"inputs":[{"name":"self"},{"generics":["u32"],"name":"option"}],"output":{"name":"result"}}],[10,"set_write_timeout","","Sets the `SO_SNDTIMEO` option for this socket.",4,{"inputs":[{"name":"self"},{"generics":["duration"],"name":"option"}],"output":{"name":"result"}}],[10,"write_timeout_ms","","Gets the value of the `SO_SNDTIMEO` option for this socket.",4,{"inputs":[{"name":"self"}],"output":{"generics":["option"],"name":"result"}}],[10,"write_timeout","","Gets the value of the `SO_SNDTIMEO` option for this socket.",4,{"inputs":[{"name":"self"}],"output":{"generics":["option"],"name":"result"}}],[10,"set_ttl","","Sets the value for the `IP_TTL` option on this socket.",4,{"inputs":[{"name":"self"},{"name":"u32"}],"output":{"name":"result"}}],[10,"ttl","","Gets the value of the `IP_TTL` option for this socket.",4,{"inputs":[{"name":"self"}],"output":{"generics":["u32"],"name":"result"}}],[10,"set_only_v6","","Sets the value for the `IPV6_V6ONLY` option on this socket.",4,{"inputs":[{"name":"self"},{"name":"bool"}],"output":{"name":"result"}}],[10,"only_v6","","Gets the value of the `IPV6_V6ONLY` option for this socket.",4,{"inputs":[{"name":"self"}],"output":{"generics":["bool"],"name":"result"}}],[10,"connect","","Executes a `connect` operation on this socket, establishing a connection to the host specified by `addr`.",4,{"inputs":[{"name":"self"},{"name":"t"}],"output":{"name":"result"}}],[10,"take_error","","Get the value of the `SO_ERROR` option on this socket.",4,{"inputs":[{"name":"self"}],"output":{"generics":["option"],"name":"result"}}],[10,"set_nonblocking","","Moves this TCP stream into or out of nonblocking mode.",4,{"inputs":[{"name":"self"},{"name":"bool"}],"output":{"name":"result"}}],[10,"set_linger","","Sets the linger duration of this socket by setting the SO_LINGER option",4,{"inputs":[{"name":"self"},{"generics":["duration"],"name":"option"}],"output":{"name":"result"}}],[10,"linger","","reads the linger duration for this socket by getting the SO_LINGER option",4,{"inputs":[{"name":"self"}],"output":{"generics":["option"],"name":"result"}}],[8,"TcpListenerExt","","Extension methods for the standard [`TcpListener` type][link] in `std::net`.",null,null],[10,"set_ttl","","Sets the value for the `IP_TTL` option on this socket.",5,{"inputs":[{"name":"self"},{"name":"u32"}],"output":{"name":"result"}}],[10,"ttl","","Gets the value of the `IP_TTL` option for this socket.",5,{"inputs":[{"name":"self"}],"output":{"generics":["u32"],"name":"result"}}],[10,"set_only_v6","","Sets the value for the `IPV6_V6ONLY` option on this socket.",5,{"inputs":[{"name":"self"},{"name":"bool"}],"output":{"name":"result"}}],[10,"only_v6","","Gets the value of the `IPV6_V6ONLY` option for this socket.",5,{"inputs":[{"name":"self"}],"output":{"generics":["bool"],"name":"result"}}],[10,"take_error","","Get the value of the `SO_ERROR` option on this socket.",5,{"inputs":[{"name":"self"}],"output":{"generics":["option"],"name":"result"}}],[10,"set_nonblocking","","Moves this TCP listener into or out of nonblocking mode.",5,{"inputs":[{"name":"self"},{"name":"bool"}],"output":{"name":"result"}}],[10,"set_linger","","Sets the linger duration of this socket by setting the SO_LINGER option",5,{"inputs":[{"name":"self"},{"generics":["duration"],"name":"option"}],"output":{"name":"result"}}],[10,"linger","","reads the linger duration for this socket by getting the SO_LINGER option",5,{"inputs":[{"name":"self"}],"output":{"generics":["option"],"name":"result"}}],[8,"UdpSocketExt","","Extension methods for the standard [`UdpSocket` type][link] in `std::net`.",null,null],[10,"set_recv_buffer_size","","Sets the value of the `SO_RCVBUF` option on this socket.",6,{"inputs":[{"name":"self"},{"name":"usize"}],"output":{"name":"result"}}],[10,"recv_buffer_size","","Gets the value of the `SO_RCVBUF` option on this socket.",6,{"inputs":[{"name":"self"}],"output":{"generics":["usize"],"name":"result"}}],[10,"set_send_buffer_size","","Sets the value of the `SO_SNDBUF` option on this socket.",6,{"inputs":[{"name":"self"},{"name":"usize"}],"output":{"name":"result"}}],[10,"send_buffer_size","","Gets the value of the `SO_SNDBUF` option on this socket.",6,{"inputs":[{"name":"self"}],"output":{"generics":["usize"],"name":"result"}}],[10,"set_broadcast","","Sets the value of the `SO_BROADCAST` option for this socket.",6,{"inputs":[{"name":"self"},{"name":"bool"}],"output":{"name":"result"}}],[10,"broadcast","","Gets the value of the `SO_BROADCAST` option for this socket.",6,{"inputs":[{"name":"self"}],"output":{"generics":["bool"],"name":"result"}}],[10,"set_multicast_loop_v4","","Sets the value of the `IP_MULTICAST_LOOP` option for this socket.",6,{"inputs":[{"name":"self"},{"name":"bool"}],"output":{"name":"result"}}],[10,"multicast_loop_v4","","Gets the value of the `IP_MULTICAST_LOOP` option for this socket.",6,{"inputs":[{"name":"self"}],"output":{"generics":["bool"],"name":"result"}}],[10,"set_multicast_ttl_v4","","Sets the value of the `IP_MULTICAST_TTL` option for this socket.",6,{"inputs":[{"name":"self"},{"name":"u32"}],"output":{"name":"result"}}],[10,"multicast_ttl_v4","","Gets the value of the `IP_MULTICAST_TTL` option for this socket.",6,{"inputs":[{"name":"self"}],"output":{"generics":["u32"],"name":"result"}}],[10,"set_multicast_hops_v6","","Sets the value of the `IPV6_MULTICAST_HOPS` option for this socket",6,{"inputs":[{"name":"self"},{"name":"u32"}],"output":{"name":"result"}}],[10,"multicast_hops_v6","","Gets the value of the `IPV6_MULTICAST_HOPS` option for this socket",6,{"inputs":[{"name":"self"}],"output":{"generics":["u32"],"name":"result"}}],[10,"set_multicast_loop_v6","","Sets the value of the `IPV6_MULTICAST_LOOP` option for this socket.",6,{"inputs":[{"name":"self"},{"name":"bool"}],"output":{"name":"result"}}],[10,"multicast_loop_v6","","Gets the value of the `IPV6_MULTICAST_LOOP` option for this socket.",6,{"inputs":[{"name":"self"}],"output":{"generics":["bool"],"name":"result"}}],[10,"set_multicast_if_v4","","Sets the value of the `IP_MULTICAST_IF` option for this socket.",6,{"inputs":[{"name":"self"},{"name":"ipv4addr"}],"output":{"name":"result"}}],[10,"multicast_if_v4","","Gets the value of the `IP_MULTICAST_IF` option for this socket.",6,{"inputs":[{"name":"self"}],"output":{"generics":["ipv4addr"],"name":"result"}}],[10,"set_multicast_if_v6","","Sets the value of the `IPV6_MULTICAST_IF` option for this socket.",6,{"inputs":[{"name":"self"},{"name":"u32"}],"output":{"name":"result"}}],[10,"multicast_if_v6","","Gets the value of the `IPV6_MULTICAST_IF` option for this socket.",6,{"inputs":[{"name":"self"}],"output":{"generics":["u32"],"name":"result"}}],[10,"set_ttl","","Sets the value for the `IP_TTL` option on this socket.",6,{"inputs":[{"name":"self"},{"name":"u32"}],"output":{"name":"result"}}],[10,"ttl","","Gets the value of the `IP_TTL` option for this socket.",6,{"inputs":[{"name":"self"}],"output":{"generics":["u32"],"name":"result"}}],[10,"set_unicast_hops_v6","","Sets the value for the `IPV6_UNICAST_HOPS` option on this socket.",6,{"inputs":[{"name":"self"},{"name":"u32"}],"output":{"name":"result"}}],[10,"unicast_hops_v6","","Gets the value of the `IPV6_UNICAST_HOPS` option for this socket.",6,{"inputs":[{"name":"self"}],"output":{"generics":["u32"],"name":"result"}}],[10,"set_only_v6","","Sets the value for the `IPV6_V6ONLY` option on this socket.",6,{"inputs":[{"name":"self"},{"name":"bool"}],"output":{"name":"result"}}],[10,"only_v6","","Gets the value of the `IPV6_V6ONLY` option for this socket.",6,{"inputs":[{"name":"self"}],"output":{"generics":["bool"],"name":"result"}}],[10,"join_multicast_v4","","Executes an operation of the `IP_ADD_MEMBERSHIP` type.",6,{"inputs":[{"name":"self"},{"name":"ipv4addr"},{"name":"ipv4addr"}],"output":{"name":"result"}}],[10,"join_multicast_v6","","Executes an operation of the `IPV6_ADD_MEMBERSHIP` type.",6,{"inputs":[{"name":"self"},{"name":"ipv6addr"},{"name":"u32"}],"output":{"name":"result"}}],[10,"leave_multicast_v4","","Executes an operation of the `IP_DROP_MEMBERSHIP` type.",6,{"inputs":[{"name":"self"},{"name":"ipv4addr"},{"name":"ipv4addr"}],"output":{"name":"result"}}],[10,"leave_multicast_v6","","Executes an operation of the `IPV6_DROP_MEMBERSHIP` type.",6,{"inputs":[{"name":"self"},{"name":"ipv6addr"},{"name":"u32"}],"output":{"name":"result"}}],[10,"set_read_timeout_ms","","Sets the `SO_RCVTIMEO` option for this socket.",6,{"inputs":[{"name":"self"},{"generics":["u32"],"name":"option"}],"output":{"name":"result"}}],[10,"set_read_timeout","","Sets the `SO_RCVTIMEO` option for this socket.",6,{"inputs":[{"name":"self"},{"generics":["duration"],"name":"option"}],"output":{"name":"result"}}],[10,"read_timeout_ms","","Gets the value of the `SO_RCVTIMEO` option for this socket.",6,{"inputs":[{"name":"self"}],"output":{"generics":["option"],"name":"result"}}],[10,"read_timeout","","Gets the value of the `SO_RCVTIMEO` option for this socket.",6,{"inputs":[{"name":"self"}],"output":{"generics":["option"],"name":"result"}}],[10,"set_write_timeout_ms","","Sets the `SO_SNDTIMEO` option for this socket.",6,{"inputs":[{"name":"self"},{"generics":["u32"],"name":"option"}],"output":{"name":"result"}}],[10,"set_write_timeout","","Sets the `SO_SNDTIMEO` option for this socket.",6,{"inputs":[{"name":"self"},{"generics":["duration"],"name":"option"}],"output":{"name":"result"}}],[10,"write_timeout_ms","","Gets the value of the `SO_SNDTIMEO` option for this socket.",6,{"inputs":[{"name":"self"}],"output":{"generics":["option"],"name":"result"}}],[10,"write_timeout","","Gets the value of the `SO_SNDTIMEO` option for this socket.",6,{"inputs":[{"name":"self"}],"output":{"generics":["option"],"name":"result"}}],[10,"take_error","","Get the value of the `SO_ERROR` option on this socket.",6,{"inputs":[{"name":"self"}],"output":{"generics":["option"],"name":"result"}}],[10,"connect","","Connects this UDP socket to a remote address, allowing the `send` and `recv` syscalls to be used to send data and also applies filters to only receive data from the specified address.",6,{"inputs":[{"name":"self"},{"name":"a"}],"output":{"name":"result"}}],[10,"send","","Sends data on the socket to the remote address to which it is connected.",6,null],[10,"recv","","Receives data on the socket from the remote address to which it is connected.",6,null],[10,"set_nonblocking","","Moves this UDP socket into or out of nonblocking mode.",6,{"inputs":[{"name":"self"},{"name":"bool"}],"output":{"name":"result"}}]],"paths":[[3,"TcpBuilder"],[3,"UdpBuilder"],[8,"UnixTcpBuilderExt"],[8,"UnixUdpBuilderExt"],[8,"TcpStreamExt"],[8,"TcpListenerExt"],[8,"UdpSocketExt"]]};
initSearch(searchIndex);
