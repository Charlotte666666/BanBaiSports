<%@ page import="com.helpyouworkeasy.Configure"  %>
<%
   if ( "".equals( Configure.SYS_INDEX_PAGE ) ) Configure.SYS_INDEX_PAGE = "index_main.jsp";
   response.sendRedirect( Configure.SYS_INDEX_PAGE );
%>