package com.cl.controller;

import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import java.text.ParseException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Calendar;
import java.util.Map;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Date;
import java.util.List;
import javax.servlet.http.HttpServletRequest;

import com.cl.utils.ValidatorUtils;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.cl.annotation.IgnoreAuth;

import com.cl.entity.ShensulanmuEntity;
import com.cl.entity.view.ShensulanmuView;

import com.cl.service.ShensulanmuService;
import com.cl.service.TokenService;
import com.cl.utils.PageUtils;
import com.cl.utils.R;
import com.cl.utils.MPUtil;
import com.cl.utils.CommonUtil;
import java.io.IOException;

/**
 * 申诉栏目
 * 后端接口
 * @author 
 * @email 
 * @date 2024-02-01 11:17:28
 */
@RestController
@RequestMapping("/shensulanmu")
public class ShensulanmuController {
    @Autowired
    private ShensulanmuService shensulanmuService;



    


    /**
     * 后端列表
     */
    @RequestMapping("/page")
    public R page(@RequestParam Map<String, Object> params,ShensulanmuEntity shensulanmu,
		HttpServletRequest request){
        EntityWrapper<ShensulanmuEntity> ew = new EntityWrapper<ShensulanmuEntity>();

		PageUtils page = shensulanmuService.queryPage(params, MPUtil.sort(MPUtil.between(MPUtil.likeOrEq(ew, shensulanmu), params), params));

        return R.ok().put("data", page);
    }
    
    /**
     * 前端列表
     */
	@IgnoreAuth
    @RequestMapping("/list")
    public R list(@RequestParam Map<String, Object> params,ShensulanmuEntity shensulanmu, 
		HttpServletRequest request){
        EntityWrapper<ShensulanmuEntity> ew = new EntityWrapper<ShensulanmuEntity>();

		PageUtils page = shensulanmuService.queryPage(params, MPUtil.sort(MPUtil.between(MPUtil.likeOrEq(ew, shensulanmu), params), params));
        return R.ok().put("data", page);
    }

	/**
     * 列表
     */
    @RequestMapping("/lists")
    public R list( ShensulanmuEntity shensulanmu){
       	EntityWrapper<ShensulanmuEntity> ew = new EntityWrapper<ShensulanmuEntity>();
      	ew.allEq(MPUtil.allEQMapPre( shensulanmu, "shensulanmu")); 
        return R.ok().put("data", shensulanmuService.selectListView(ew));
    }

	 /**
     * 查询
     */
    @RequestMapping("/query")
    public R query(ShensulanmuEntity shensulanmu){
        EntityWrapper< ShensulanmuEntity> ew = new EntityWrapper< ShensulanmuEntity>();
 		ew.allEq(MPUtil.allEQMapPre( shensulanmu, "shensulanmu")); 
		ShensulanmuView shensulanmuView =  shensulanmuService.selectView(ew);
		return R.ok("查询申诉栏目成功").put("data", shensulanmuView);
    }
	
    /**
     * 后端详情
     */
    @RequestMapping("/info/{id}")
    public R info(@PathVariable("id") Long id){
        ShensulanmuEntity shensulanmu = shensulanmuService.selectById(id);
		shensulanmu = shensulanmuService.selectView(new EntityWrapper<ShensulanmuEntity>().eq("id", id));
        return R.ok().put("data", shensulanmu);
    }

    /**
     * 前端详情
     */
	@IgnoreAuth
    @RequestMapping("/detail/{id}")
    public R detail(@PathVariable("id") Long id){
        ShensulanmuEntity shensulanmu = shensulanmuService.selectById(id);
		shensulanmu = shensulanmuService.selectView(new EntityWrapper<ShensulanmuEntity>().eq("id", id));
        return R.ok().put("data", shensulanmu);
    }
    



    /**
     * 后端保存
     */
    @RequestMapping("/save")
    public R save(@RequestBody ShensulanmuEntity shensulanmu, HttpServletRequest request){
    	shensulanmu.setId(new Date().getTime()+new Double(Math.floor(Math.random()*1000)).longValue());
    	//ValidatorUtils.validateEntity(shensulanmu);
        shensulanmuService.insert(shensulanmu);
        return R.ok();
    }
    
    /**
     * 前端保存
     */
    @RequestMapping("/add")
    public R add(@RequestBody ShensulanmuEntity shensulanmu, HttpServletRequest request){
    	shensulanmu.setId(new Date().getTime()+new Double(Math.floor(Math.random()*1000)).longValue());
    	//ValidatorUtils.validateEntity(shensulanmu);
        shensulanmuService.insert(shensulanmu);
        return R.ok();
    }



    /**
     * 修改
     */
    @RequestMapping("/update")
    @Transactional
    public R update(@RequestBody ShensulanmuEntity shensulanmu, HttpServletRequest request){
        //ValidatorUtils.validateEntity(shensulanmu);
        shensulanmuService.updateById(shensulanmu);//全部更新
        return R.ok();
    }



    

    /**
     * 删除
     */
    @RequestMapping("/delete")
    public R delete(@RequestBody Long[] ids){
        shensulanmuService.deleteBatchIds(Arrays.asList(ids));
        return R.ok();
    }
    
	








}
