/*
 * Generated by the Jasper component of Apache Tomcat
 * Version: Apache Tomcat/7.0.27
 * Generated at: 2015-01-20 04:28:09 UTC
 * Note: The last modified time of this file was set to
 *       the last modified time of the source file after
 *       generation to assist with modification tracking.
 */
package org.apache.jsp.WEB_002dINF.jsp.online.system.modules.com_alkacon_bootstrap_formatters.search;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;

public final class dictionary_js_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent {

  private static final javax.servlet.jsp.JspFactory _jspxFactory =
          javax.servlet.jsp.JspFactory.getDefaultFactory();

  private static java.util.Map<java.lang.String,java.lang.Long> _jspx_dependants;

  static {
    _jspx_dependants = new java.util.HashMap<java.lang.String,java.lang.Long>(1);
    _jspx_dependants.put("/WEB-INF/opencms.tld", Long.valueOf(1414568902000L));
  }

  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005fc_005fset_0026_005fvar;
  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005fcms_005finfo_0026_005fproperty_005fnobody;

  private javax.el.ExpressionFactory _el_expressionfactory;
  private org.apache.tomcat.InstanceManager _jsp_instancemanager;

  public java.util.Map<java.lang.String,java.lang.Long> getDependants() {
    return _jspx_dependants;
  }

  public void _jspInit() {
    _005fjspx_005ftagPool_005fc_005fset_0026_005fvar = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _005fjspx_005ftagPool_005fcms_005finfo_0026_005fproperty_005fnobody = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _el_expressionfactory = _jspxFactory.getJspApplicationContext(getServletConfig().getServletContext()).getExpressionFactory();
    _jsp_instancemanager = org.apache.jasper.runtime.InstanceManagerFactory.getInstanceManager(getServletConfig());
  }

  public void _jspDestroy() {
    _005fjspx_005ftagPool_005fc_005fset_0026_005fvar.release();
    _005fjspx_005ftagPool_005fcms_005finfo_0026_005fproperty_005fnobody.release();
  }

  public void _jspService(final javax.servlet.http.HttpServletRequest request, final javax.servlet.http.HttpServletResponse response)
        throws java.io.IOException, javax.servlet.ServletException {

    final javax.servlet.jsp.PageContext pageContext;
    final javax.servlet.ServletContext application;
    final javax.servlet.ServletConfig config;
    javax.servlet.jsp.JspWriter out = null;
    final java.lang.Object page = this;
    javax.servlet.jsp.JspWriter _jspx_out = null;
    javax.servlet.jsp.PageContext _jspx_page_context = null;


    try {
      response.setContentType("text/html;charset=UTF-8");
      pageContext = _jspxFactory.getPageContext(this, request, response,
      			null, false, 0, true);
      _jspx_page_context = pageContext;
      application = pageContext.getServletContext();
      config = pageContext.getServletConfig();
      out = pageContext.getOut();
      _jspx_out = out;

 org.opencms.util.CmsRequestUtil.setNoCacheHeaders(response); 
      if (_jspx_meth_c_005fset_005f0(_jspx_page_context))
        return;
      out.write("var GWTsearchUIDictionary = {\n");
  java.util.Locale locale = new java.util.Locale((String)pageContext.getAttribute("locale"));

    org.opencms.relations.CmsCategoryService srv = org.opencms.relations.CmsCategoryService.getInstance();
    org.opencms.jsp.CmsJspActionElement jae = new org.opencms.jsp.CmsJspActionElement(pageContext, request, response);
    org.opencms.file.CmsObject cmsO = jae.getCmsObject();
    String siteRoot = cmsO.getRequestContext().getSiteRoot() + "/";
    java.util.List<String> reps = srv.getCategoryRepositories(cmsO, siteRoot + "/_categories/");
    java.util.List<org.opencms.relations.CmsCategory> cats = srv.readCategoriesForRepositories(cmsO, "/", true, reps);
    for (org.opencms.relations.CmsCategory cat : cats) {
        String val = "\"" + cat.getPath() + "\":'" + cat.getTitle() + "',";
        out.println("\t" + val);
    }
    
    java.util.List<org.opencms.workplace.explorer.CmsExplorerTypeSettings> settings = org.opencms.main.OpenCms.getWorkplaceManager().getExplorerTypeSettings();
    for (org.opencms.workplace.explorer.CmsExplorerTypeSettings setting : settings) {
        String title = org.opencms.workplace.CmsWorkplaceMessages.getResourceTypeName(locale, setting.getName());
        if (title == null) {
            title = setting.getName();
        }
        String val = "\"" + setting.getName() + "\":'" + title + "',";
        out.println("\t" + val);
    }
    
    java.util.ResourceBundle bundle = org.opencms.i18n.CmsResourceBundleLoader.getBundle("com.alkacon.bootstrap.formatters.messages", locale);
    for (String key : bundle.keySet()) {
        String value = bundle.getString(key);
        String val = "\"" + key + "\":'" + value + "',";
        out.println("\t" + val);
    }
    out.print("\t\"locale\":'" + locale.toString() + "'"); 
      out.write(" \n");
      out.write("};");
    } catch (java.lang.Throwable t) {
      if (!(t instanceof javax.servlet.jsp.SkipPageException)){
        out = _jspx_out;
        if (out != null && out.getBufferSize() != 0)
          try { out.clearBuffer(); } catch (java.io.IOException e) {}
        if (_jspx_page_context != null) _jspx_page_context.handlePageException(t);
      }
    } finally {
      _jspxFactory.releasePageContext(_jspx_page_context);
    }
  }

  private boolean _jspx_meth_c_005fset_005f0(javax.servlet.jsp.PageContext _jspx_page_context)
          throws java.lang.Throwable {
    javax.servlet.jsp.PageContext pageContext = _jspx_page_context;
    javax.servlet.jsp.JspWriter out = _jspx_page_context.getOut();
    //  c:set
    org.apache.taglibs.standard.tag.rt.core.SetTag _jspx_th_c_005fset_005f0 = (org.apache.taglibs.standard.tag.rt.core.SetTag) _005fjspx_005ftagPool_005fc_005fset_0026_005fvar.get(org.apache.taglibs.standard.tag.rt.core.SetTag.class);
    _jspx_th_c_005fset_005f0.setPageContext(_jspx_page_context);
    _jspx_th_c_005fset_005f0.setParent(null);
    // /WEB-INF/jsp/online/system/modules/com.alkacon.bootstrap.formatters/search/dictionary.js.jsp(3,4) name = var type = java.lang.String reqTime = false required = false fragment = false deferredValue = false expectedTypeName = null deferredMethod = false methodSignature = null
    _jspx_th_c_005fset_005f0.setVar("locale");
    int _jspx_eval_c_005fset_005f0 = _jspx_th_c_005fset_005f0.doStartTag();
    if (_jspx_eval_c_005fset_005f0 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
      if (_jspx_eval_c_005fset_005f0 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
        out = _jspx_page_context.pushBody();
        _jspx_th_c_005fset_005f0.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
        _jspx_th_c_005fset_005f0.doInitBody();
      }
      do {
        if (_jspx_meth_cms_005finfo_005f0(_jspx_th_c_005fset_005f0, _jspx_page_context))
          return true;
        int evalDoAfterBody = _jspx_th_c_005fset_005f0.doAfterBody();
        if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
          break;
      } while (true);
      if (_jspx_eval_c_005fset_005f0 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
        out = _jspx_page_context.popBody();
      }
    }
    if (_jspx_th_c_005fset_005f0.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fc_005fset_0026_005fvar.reuse(_jspx_th_c_005fset_005f0);
      return true;
    }
    _005fjspx_005ftagPool_005fc_005fset_0026_005fvar.reuse(_jspx_th_c_005fset_005f0);
    return false;
  }

  private boolean _jspx_meth_cms_005finfo_005f0(javax.servlet.jsp.tagext.JspTag _jspx_th_c_005fset_005f0, javax.servlet.jsp.PageContext _jspx_page_context)
          throws java.lang.Throwable {
    javax.servlet.jsp.PageContext pageContext = _jspx_page_context;
    javax.servlet.jsp.JspWriter out = _jspx_page_context.getOut();
    //  cms:info
    org.opencms.jsp.CmsJspTagInfo _jspx_th_cms_005finfo_005f0 = (org.opencms.jsp.CmsJspTagInfo) _005fjspx_005ftagPool_005fcms_005finfo_0026_005fproperty_005fnobody.get(org.opencms.jsp.CmsJspTagInfo.class);
    _jspx_th_cms_005finfo_005f0.setPageContext(_jspx_page_context);
    _jspx_th_cms_005finfo_005f0.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_c_005fset_005f0);
    // /WEB-INF/jsp/online/system/modules/com.alkacon.bootstrap.formatters/search/dictionary.js.jsp(3,24) name = property type = null reqTime = true required = true fragment = false deferredValue = false expectedTypeName = null deferredMethod = false methodSignature = null
    _jspx_th_cms_005finfo_005f0.setProperty("opencms.request.locale");
    int _jspx_eval_cms_005finfo_005f0 = _jspx_th_cms_005finfo_005f0.doStartTag();
    if (_jspx_th_cms_005finfo_005f0.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fcms_005finfo_0026_005fproperty_005fnobody.reuse(_jspx_th_cms_005finfo_005f0);
      return true;
    }
    _005fjspx_005ftagPool_005fcms_005finfo_0026_005fproperty_005fnobody.reuse(_jspx_th_cms_005finfo_005f0);
    return false;
  }
}